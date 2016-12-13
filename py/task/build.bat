:: 可配参数
:: -dir AVI	游戏文件夹名称=AVI
:: -id 901  游戏id=901
:: -num 6 	最大玩家数量=6
:: -f   	删除文件夹时不询问
:: -u		只更新配置，不新建文件夹，不做删除操作
:: -p 		server目录路径，默认为../
rem python build.py -dir AVGouji -id 901 -num 6 -ip 192.168.202.25
python build.py
pause