var schedule = require('node-schedule');

// 每 分钟的第30秒触发： '30 * * * * *'
// 每 小时的1分30秒触发 ：'30 1 * * * *'
// 每 天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
// 每 月的1日1点1分30秒触发 ：'30 1 1 1 * *'
// 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
// 每 周1的1点1分30秒触发 ：'30 1 1 * * 1'

const task1 = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 * * * * *', () => {
        console.log('task1 :' + new Date());
    });
}
task1();


const task2 = () => {
    //每分钟的1-10秒都会触发，其它通配符依次类推
    schedule.scheduleJob('1-10 * * * * *', () => {
        console.log('task2 :' + new Date());
    })
}
task2()


// 接收对象 格式
function task3() {
    var timeNode = {
        //dayOfWeek,   0:周日 1:周一 ..... 6:周六
        //month,  0:一月    1:二月 。。。。   11:十二月
        //dayOfMonth,
        //hour,
        //minute,
        //second
    }
    //每周一的下午16：11分触发，其它组合可以根据我代码中的注释参数名自由组合
    timeNode = { hour: 16, minute: 11, dayOfWeek: 1 };

    // 每年 1月 19号 13点 59分 10秒 执行
    timeNode = { 
        month:0, 
        day:19, 
        hour:13, 
        minute:59, 
        second:10
    };

    schedule.scheduleJob(timeNode, function () {
        console.log('task3 :' + new Date());
    });
}
task3();


// 周处理
function task4() {
    var rule = new schedule.RecurrenceRule();

    // 每 周一 周三 周五 每分钟第10秒
    rule.dayOfWeek = [1, 3, 5];

    // 每 周日 周四 周五 周六 每分钟第10秒
    rule.dayOfWeek = [0, new schedule.Range(4, 6)];

    // rule.hour = 17;
    // rule.minute = 0;
    rule.second = 10;
    var j = schedule.scheduleJob(rule, function () {
        console.log('task4 ' + new Date());
    });
}
task4();


// 周处理
function task5() {
    var rule = new schedule.RecurrenceRule();

    rule.second = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    var j = schedule.scheduleJob(rule, function () {
        console.log('task5 ' + new Date());
    });
}
task5();

