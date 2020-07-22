// Date对象
// 在JS中使用Date对象表示一个时间

var d = new Date();
// console.log(d);

// 创建一个指定的时间对象
// 需要在构造函数中传递一个表示时间的字符串作为参数
// 格式 月/日/年/时:分:秒
var d2 = new Date('12/03/2016 11:10:30');
// console.log(d2);

// getDate()    获取当前日期对象是几日

var date = d.getDate();
// console.log(date);

// getDay()获取当前日期是周几
date = d.getDay();
// console.log(date);

// getMonth()   获取当前时间对象的月份
//  1月  --  0
//  2月  --  1
//  ……
//  12月 --  11
date = d.getMonth();
// console.log(date);

// getFullYear()
date = d.getFullYear();
// console.log(date);

// getTime()   获取当前日期对象的时间数
// Date.now()
var sta = Date.now();
// console.log(sta);
for(var i=0;i < 10000;i++);
var end = Date.now()
// console.log(end);
console.log(end - sta);

