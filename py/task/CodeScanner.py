import os
import chardet
import re
from pathlib import Path
from pprint import pprint

global_dict = {}

filter_list = [
    'map',
    'pin',
    'swf',
    'Config.lua',
    'Constant.lua',
    'TVFramework',
    'profiler.lua',
    'RoomState.lua',
    'editor',
    '_load',
    'sdgj_cardType.lua',
    'sdgj_animGouji.lua',
    'sdgj_animMen.lua',
    'sdgj_animOutShao.lua',
    'sdgj_animShao.lua',
    'sdgj_res_card.lua',
]

game_path = r'D:\svn\dfqf\client\games\sdgj'
work_path = r'D:\svn\dfqf\client\games\sdgj\dev-main\scripts'
copy_path = r'D:\svn\dfqf\client\games\sdgj\dev-main\scripts2'


gbl_pattern = re.compile(r'^(?!local)(\w+)(\s*)=([\s\S]*)', re.M)

def scan_dcl(path):
    with path.open(mode='rb') as f:
        fbytes = f.read()
        result = chardet.detect(fbytes)
        encoding = 'utf-8' if result['encoding'] is None else result['encoding']
        fstr = fbytes.decode(encoding)
        new_dir = str(path.parent).replace('scripts', 'scripts2')
        new_path = Path(new_dir)
        if not new_path.exists():            
            new_path.mkdir(mode=0o777, parents=True)
        new_path = new_path.joinpath(path.name)
        new_str = fix_dcl(new_path, fstr)
        if new_str is not None:
            fstr = new_str 
        new_file = new_path.open(mode='w', encoding='utf-8', newline='\n')
        new_file.write(fstr)
        new_file.close()

        f.close()

def fix_dcl(path, fstr):
    path_str = str(path)
    new_str = None
    var = None

    for x in filter_list:
        if path_str.find(x) != -1:
            return new_str

    matched = gbl_pattern.search(fstr)
    if matched is not None:
        str1 = fstr[0:matched.start()]
        str2 = fstr[matched.start():matched.end()]
        new_str = str1 + matched.expand(r'local \1 =\3\nreturn \1;')
        var = matched.group(1)

    if new_str is not None: 
        relative_path = str(path.relative_to(copy_path).with_suffix(''))
        print('fix dcl : ', var, relative_path)
        global_dict[var] = relative_path

    return new_str

def fix_req(path):
    print("fix req : ", path)
    path_str = str(path)
    with path.open(mode='r+', encoding='utf-8', newline='\n') as f:
        fstr = f.read()
        f.seek(0)
        f.truncate()
        new_lines = []
        for k, v in global_dict.items():
            if path_str.find(v) == -1 and re.search(r'%s(?![\w_"])' % (k), fstr, re.I) is not None:
                new_lines.append('local %s = require(_gamePath.."/%s");\r' % (k, v.replace('\\', '/').replace('.lua', '')))
        if len(new_lines) > 0:
            f.writelines(new_lines)
        f.write(fstr.replace('\r\n', '\n'))
        f.close()

func_pattern1 = re.compile(r'^(\w+)[.](\w+)\s*=\s*function\s*\(\s*self\s*,*\s*(.*)\)', re.M)
func_pattern2 = re.compile(r'^(\w+)[.](\w+)\s*=\s*function\s*\(*\s*(.*)\)', re.M)

def fix_func(path):
    print("fix func : ", path)
    with path.open(mode='r+', encoding='utf-8', newline='\n') as f:
        fstr = f.read()
        f.seek(0)
        f.truncate()
        fstr = re.sub(func_pattern1, r'function \1:\2(\3)', fstr)
        fstr = re.sub(func_pattern2, r'function \1.\2(\3)', fstr)
        f.write(fstr.replace('\r\n', '\n'))
        f.close()

script_path = Path(work_path)
script_list = script_path.rglob('*.lua')
for m in script_list:
    scan_dcl(m)

script_path = Path(copy_path)
script_list = script_path.rglob('*.lua')
for m in script_list:
    fix_req(m)
    fix_func(m)

