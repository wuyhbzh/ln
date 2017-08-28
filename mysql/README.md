windows 安装mysql
初始化
D:\mysql-5.7.18-win32\bin\mysqld  --initialize

安装服务  (MySQL57 服务名, 一般为MYSQL)
D:\mysql-5.7.18-win32\bin\mysqld -install MySQL57 --defaults-file="D:\mysql-5.7.18-win32\my.ini"

my.ini内容：
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3307端口
port = 3307 
# 设置mysql的安装目录
basedir=D:\mysql-5.7.18-win32
# 设置mysql数据库的数据的存放目录
datadir=D:\mysql-5.7.18-win32\data
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB 
# 跳过密码验证
# skip-grant-tables


启动
net start MYSQL57

没有初始化用户密码， 启动 MYSQL57会报 3534
1.删除data目录下所有的文件
2.然后 mysqld --initialize --user=mysql --console 重新初始化库，自动生成带随机密码的用户
3.(重新注册服务) mysqld --remove ; mysqld --install
4.net start mysql  // 启动服务


测试连接
mysql -uroot -p 随机密码

修改密码
mysqladmin -u root -p password root123

