#########################################################################
# File Name: get_available_port.sh
# Author: RogerLuo
# mail: xiaoyaojie710@163.com
# Created Time: Wed 09 Dec 2015 01:20:45 PM CST
#########################################################################
#!/bin/bash

declare -r port_begin=6101
declare -r port_end=10000
declare -r port_all=`ps aux | grep -v grep | awk '{
														match($0, /-p [0-9]+/); 
														if(RSTART!=0) 
														{ 
															data=substr($0,RSTART,RLENGTH); 
															sub("-p ","",data);print data;
														} 
												  }' | sort -nk 1 | uniq`


check_port_availability()
{
	local port=$1
	#count=`sudo netstat -an | grep -w $port | wc -l`
	count=`sudo lsof -i:$port | wc -l`

	ret=1	
	if [ $count -eq 0 ]
	then
		ret=0
	fi

	echo $ret
}

get_one_available_port()
{
	count=1 
	if [ $# -ge 1 ]
	then
		count=$1
	fi

	cur_count=0	
	for((port=$port_begin; port<$port_end; port++))
	do
		exist=`echo $port_all | grep $port | wc -l`
		if [ $exist -eq 0 ]
		then
			ret=`check_port_availability $port`
			if [ $ret -eq 0 ]
			then
				 echo "$port"
				 let cur_count++
			 fi
		 fi
	
	if [ $cur_count -ge $count ]
	then
		exit
	fi
	
	done

}

get_one_available_port $@
