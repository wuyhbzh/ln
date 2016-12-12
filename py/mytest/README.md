sublime python 插件



http://blog.csdn.net/mx472756841/article/details/50535517
Package Control：管理插件的插件，前面已安装
SublimeCodeIntel: 代码提示插件，可根据是python、java等自动代码提示
Terminal：打开一个命令窗口，用于各种命令操作
AutoPep8：python开发规范pep8
Anaconda：自动匹配关键字等实用功能，有效提高开发效率
SublimeREPL：直接运行当前文件，可以方便调试，与Terminal可以联合使用 至于具体可参考资料【4】

相关资料：
【1】 Package Control: Installationhttps://packagecontrol.io/installation
【2】 By 金石开 https://sublime.wbond.net/installation
【3】为 Sublime Text 3 设置 Python 的全栈开发环境 http://python.jobbole.com/81312/
【4】基于Sublime Text搭建Python IDE http://loosky.net/2967.html
【5】Sublime Text 3 配置和使用方法  https://www.zybuluo.com/king/note/47271
【6】一些可用插件介绍 https://github.com/jikeytang/sublime-text
【7】一些可用插件介绍 http://blog.jobbole.com/79326/
【8】一些可用插件介绍 http://www.open-open.com/news/view/26d731


SublimeREPL:
1. 打开Sublime text 3 安装package control
Sublime Text 3 安装Package Control
2. 安装 SublimeREPL
Ctrl+shift+p 键入 install packages
稍等片刻后 键入 SublimeREPL 安装即可
通过选项Tools->SublimeREPL->Python就可以看到效果了
3. 键位绑定
当然每次通过Tools->SublimeREPL->Python这样的方式比较繁琐
将这样的操作和一个按键如F1绑定后，就会方便很多啦
e.g.打开Preferences->Key Bindings-User，复制一下代码：
[{"keys":["f1"],
"caption": "SublimeREPL: Python - RUN current file",
"command": "run_existing_window_command", "args":
{"id": "repl_python_run","file": "config/Python/Main.sublime-menu"}
}]
4.Alt+shift+2 打开新窗口



if __name__ == '__main__'

__name__ 是当前模块名，当模块被直接运行时模块名为 __main__ 