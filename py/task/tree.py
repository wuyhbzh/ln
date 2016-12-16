#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
gentrees.py - generate the tree of specified directory
"""
import os
import optparse
import codecs
from treeconf import dirlist
from treeconf import ignored


# 只找到key则 返回 true
# 如能找到key的value 返回 value
# 否则返回None
def getArgvValue(argvKey):
    argvKeyIndex = 0
    argvValueIndex = 0
    argvValue = None
    argvValueTemp = '-'

    if argvKey in sys.argv:
        argvKeyIndex = sys.argv.index(argvKey)
        argvValueIndex = argvKeyIndex + 1

    if argvKeyIndex>0:
        argvValue = True
    
    if argvValueIndex < len(sys.argv) and len(sys.argv) > 1 and argvValueIndex>0:
        argvValueTemp = sys.argv[argvValueIndex]
    
    if argvValueTemp[0] != '-':
        argvValue = argvValueTemp

    return argvValue


############## tree #########################
LOCATION_NONE     = 'NONE'
LOCATION_MID      = 'MID'
LOCATION_MID_GAP  = 'MID_GAP'
LOCATION_TAIL     = 'TAIL'
LOCATION_TAIL_GAP = 'TAIL_GAP'
 
Notations = {
    LOCATION_NONE: '',
    LOCATION_MID: '├─',
    LOCATION_MID_GAP: '│  ',
    LOCATION_TAIL: '└─',
    LOCATION_TAIL_GAP: '    '
}
 
 
class Node(object):
    def __init__(self, name, desc, depth, parent=None, location=LOCATION_NONE):
        self.name = name
        self.desc = desc
        self.depth = depth
        self.parent = parent
        self.location = location
        self.childtier = 0
        self.children = []
 
    def __str__(self):
        line = self.name
        # 描述前的空格
        for num in range(0, self.childtier+2):
            line = line + Notations[LOCATION_TAIL_GAP]
            
        line = line + self.desc
        sections = [line]
        parent = self.has_parent()
        if parent:
            if self.is_tail():
                sections.insert(0, Notations[LOCATION_TAIL])
            else:
                sections.insert(0, Notations[LOCATION_MID])
            self.__insert_gaps(self, sections)
        return ''.join(sections)
 
    def __insert_gaps(self, node, sections):
        parent = node.has_parent()
        # parent exists and parent's parent is not the root node
        if parent and parent.has_parent():
            if parent.is_tail():
                sections.insert(0, Notations[LOCATION_TAIL_GAP])
            else:
                sections.insert(0, Notations[LOCATION_MID_GAP])
            self.__insert_gaps(parent, sections)
 
    def has_parent(self):
        return self.parent
 
    def has_children(self):
        return self.children
 
    def update_parent_tier(self, children_childtier):
        if self.parent and self.parent.childtier == children_childtier:
            self.parent.childtier += 1;
            self.parent.update_parent_tier(self.parent.childtier)

    def add_child(self, node):
        self.children.append(node)
        if self.childtier == 0:
            self.childtier += 1;
            self.update_parent_tier(self.childtier)
 
    def is_tail(self):
        return self.location == LOCATION_TAIL
 
 
class Tree(object):
    def __init__(self):
        self.nodes = []
 
    def debug_print(self):
        for node in self.nodes:
            print(str(node) + '/')
 
    def write2file(self, filename):
        try:
            with codecs.open(filename, 'w', 'utf-8') as fp:
                fp.writelines(str(node) + '\n'
                              for node in self.nodes)
        except IOError as e:
            print(e)
            return False
        return True
 
    def build(self, path, pydict):
        self.__build(path, pydict, 0, None, LOCATION_NONE)
 
    def __build(self, path, pydict, depth, parent, location):
        if os.path.isdir(path):
            name = os.path.basename(path)
            if name in ignored:
                return
                
            dirname = parent and (parent.name + '/' + name) or ''
            desc = name in pydict.keys() and pydict[name] or ''
            desc = (dirname in pydict.keys() and pydict[dirname]) or desc

            node = Node(name, desc, depth, parent, location)
            self.add_node(node)
            if parent:
                parent.add_child(node)
 
            entries = self.list_folder(path)
            end_index = len(entries) - 1
            for i, entry in enumerate(entries):
                childpath = os.path.join(path, entry)
                location = LOCATION_TAIL if i == end_index else LOCATION_MID
                self.__build(childpath, pydict, depth + 1, node, location)
 
    def list_folder(self, path):
        """Folders only."""
        return [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]
        # for entry in os.listdir(path):
        #     childpath = os.path.join(path, entry)
        #     if os.path.isdir(childpath):
        #         yield entry
 
    def add_node(self, node):
        self.nodes.append(node)
 
 
def _parse_args():
    parser = optparse.OptionParser()
    parser.add_option(
        '-p', '--path', dest='path', action='store', type='string',
        default='./', help='the path to generate the tree [default: %default]')
    parser.add_option(
        '-o', '--out', dest='file', action='store', type='string',
        help='the file to save the result [default: pathname.trees]')
    options, args = parser.parse_args()
    # positional arguments are ignored
    return options
 
 


def main():
    options = _parse_args()
    path = options.path
    if not os.path.isdir(path):
        print('%s is not a directory' % path)
        return 2
 
    if not path or path == './':
        filepath = os.path.realpath(__file__)  # for linux
        path = os.path.dirname(filepath)
    tree = Tree()
    tree.build(path, dirlist)
    # tree.debug_print()
    if options.file:
        filename = options.file
    else:
        name = os.path.basename(path.rstrip('/'))
        filename = '%s.trees' % name
    result = tree.write2file(filename)
    print('Write to file `%s` %s' % (filename, 'success' if result else 'failed'))
    return 0 if result else 1
 
 
if __name__ == '__main__':
    import sys
    sys.exit(main())
