博客: hexo    插件: hexo-helper-live2d

负载均衡 :https://github.com/Unitech/pm2 


nodejs 调试  node-inspector


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
在项目路径下运行此命令，将自动下载所需依赖库，保存到项目路径下的node_module

nodejs框架
1.express: 		nodejs入门级服务器框架
2.ORM2： 		nodejs的对象关系映射，支持mysql
3.sequelize 	nodejs的对象关系映射，支持mysql
4.redis 		Redis是一个key-value类型的数据库
5.jsonwebtoken 	token生成
6.node-schedule node定时器
7.async


相关技术:
token https://zhuanlan.zhihu.com/p/19920223?columnSlug=FrontendMagazine
GID 为GroupId，即组ID，用来标识用户组的唯一标识符
UID 为UserId，即用户ID，用来标识每个用户的唯一标示符


相关工具:
RESTClient: 火狐的http请求插件
postman:	chrome http插件


相关问题:
Cannot find module 'mysql'
node中引用自定义模块（非核心模块）时会进行如下三个步骤
1.路径分析
2.文件定位
3.编译执行
而路径分析是安如下方式进行的：
1）当前目录下的node_modules目录,
2）父目录下的node_modules目录；
3）父目录的父目录下的node_modules目录；
4）逐级递归，直到根目录下的node_modules目录。
如果这些目录中均未找到代码中所引用的module,那么就会报出错误：Cannot find module 'mysql'


