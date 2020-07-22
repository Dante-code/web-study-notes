// split()将字符串拆分为数组，可以根据正则表达式来拆分
var str = '1a2b3c4d5e6f7g';
var res = str.split(/[A-z]/);
// console.log(res);

// search()可以根据指定内容来搜索，如果没有则返回-1
// 正则表达式去检索字符串
str = ' fwei aec gjrijew afc fjwie';
res = str.search(/a[bef]c/g);   //search()会忽略全局,加g没有用
// console.log(res);

// match()可以=根据正则表达式，从一个字符串中将符合条件的内容提取出来
// 默认情况下match只会找到第一个符合要求的内容，找到以后就停止检索，但是可以设置全局模式，这样就可以匹配到所有内容
// match()返回的是一个数组
str = '1a2b3c4D5E6f7g';
res = str.match(/[a-z]/ig); //i和g位置任意
// console.log(res);

// replace()可以将字符串中指定内容替换为新的内容,但是replace默认替换第一个
// 参数：
//      第一个，被替换的内容，可以接受正则表达式
//      第二个，新的内容
res = str.replace(/[a-z]/ig,'@');
console.log(res);



