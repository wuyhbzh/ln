sublime nodejs 插件
1、下载Nodejs插件，下载地址为：https://github.com/tanepiper/SublimeText-Nodejs下载zip压缩包后解压，文件名改为Nodejs
2、打开Sublime Text3，点击菜单“Perferences” =>“Browse 	Packages”打开“Packages”文件夹，并将第1部的Nodejs文件夹剪切进来
3、打开文件“Nodejs.sublime-build”，将代码 "encoding": "cp1252" 改为 "encoding": "utf8" ，将代码 "cmd": ["taskkill /F /IM node.exe & node", "$file"] 改为 "cmd": ["node", "$file"] ，保存文件
4、打开文件“Nodejs.sublime-settings”，将代码 "node_command": false改为 "node_command": "D:\\Program Files\\nodejs\\node.exe" ，将代码 "npm_command": false 改为 "npm_command": "D:\\Program Files\\nodejs\\npm.cmd" ，保存文件
5、点击菜单"Tools" => "Build System" => "Nodejs",  
6.打开js文件，ctrl+b 运行

nodejs菜鸟教程
http://www.runoob.com/nodejs/nodejs-npm.html


npm
是nodejs包管理器

设置完整npm国内镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

npm init:
创建模板，生成此路径下对应的nodejs项目配置package.json

npm install:
在此路径下安装包，自动创建node_module保存安装的模板

1.express: nodejs入门级服务器框架

2.ORM2： nodejs的对象关系映射，支持mysql


相关技术:

使用 AngularJS & NodeJS 实现基于 token 的认证应用
https://zhuanlan.zhihu.com/p/19920223?columnSlug=FrontendMagazine


相关工具:
RESTClient: 火狐的http请求插件