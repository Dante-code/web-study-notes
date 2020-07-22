// 正则表达式用于定义一些字符串的规则

// 创建正则表达式对象
// 方法一
var reg = new RegExp('a','i');
var str = 'Apple'
// RegExp('正则表达式','匹配模式');
// 使用typeof检查正则对象，会返回object
// 匹配模式:
//          i   忽略大小写
//          g   全局匹配模式

// test()使用该方法可以用来检查字符串是否符合正则表达式的规则，符合返回true,不符合则返回false
// console.log(reg.test(str));

// 方法二
// var 变量 = /正则表达式/匹配模式

reg = /a/i;

// reg = /a|b|c|d|e|f|g/;   |表示或的关系

// 更加简洁的方法:  reg = /[abcdefg]/; 里面的内容都是或的关系      [ab] == a|b

// []表示或的关系   [a-z]   任意小写字母
// [A-Z]    任意大写字母
// [A-z]    任意字母
// [0-9]    任意数字

reg = /[A-z]/;
// console.log(reg.test('W'));

// 检查一个字符串中是否含有abc 或 adc 或aec
reg = /a[bde]c/;
// console.log(reg.test('eajgrahabceriig'));


// [^ ]除了 否定
reg = /[^abcde]/;
// console.log(reg.test('abcde'));

/* 
    量词
        通过量词可以设定一个内容出现的次数
        量词只对它前边的一个内容起作用
        {n}     正好出现n次
        {m,n}   出现m~n次
        {m,}    m次以上
        +   至少一个，相当于{1,}
        *   0个或多个，相当于{0,}
        ?   0个或1个，相当于{0,1}

*/
reg = /a{4}/;
// console.log(reg.test('aaaaaaaaa')); //因为前面有四个a了所以返回true

reg = /(ab){3}/;
// console.log(reg.test('ababb'));

reg = /d{1,3}/;
// console.log(reg.test('ddddd'));

/*
    ^表示开头，&表示结尾
*/
reg = /^a/;
// console.log(reg.test('aa'));
reg = /a$/;
// console.log(reg.test('aa'));
reg = /^a$/;
// console.log(reg.test('aa'));
// console.log(reg.test('a'));

/**
 * 检查一个字符串中是否含有 .
 * .表示任意字符
 * 在正则表达式中使用\作为转义字符
 * \.来表示.
 * \\  表示\
 * 
 * 注意:使用构造函数时，由于它的参数是一个字符串，而\是字符串中转义字符，如果要使用\则需要使用\\来代替
*/

 reg = /./;
//  console.log(reg.test('fad'));
 reg = /\./;
//  console.log(reg.test('fad'));
//  console.log(reg.test('.'));
reg = new RegExp('\\.');   //表示.本来需要\来转义，但是RegExp()里面接收的\又需要转义，所以要两个\\来表示
// console.log(reg.test('fad'));


// 

/**
 * \w   字母、数字和下划线_ [A-z0-9_]
 * \W   与\w相反
 * \d   任意数字[0-9]
 * \D   与\d相反
 * \s   空格
 * \S   与\s相反
 * \b   单词边界
 * \B   与\b相反
 * 
 */

 reg = /\bchild\b/;
//  console.log(reg.test('hello sschildwe'));

 var str = prompt('请输入用户名');//在index.html中运行
 str = str.replace(/^\s*|\s&*/g,''); //去除开头和结尾的空格
 console.log(str);