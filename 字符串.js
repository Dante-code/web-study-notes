var a = 'hello';
// a.substring 与 a.slice相似
//  但是如果传递一个负值，则默认使用0，而且还会自动调整参数位置，如果第二个参数小于第一个，则自动交换
var res;
// res = = a.substring(4,-1);
// console.log(res);

// a.substr()
//  也用来截取字符串
//      参数：
//          1.截取开始位置的索引
//          2.截取的长度
// res = a.substr(2,3);
// console.log(res);

// indexOf()该方法可以检索一个字符串中是否含有指定内容
//      如果字符串中含有该内容，则会返回第一次出现的索引，若没有则返回-1
//     可以指定第二个参数，表示指定开始查找的位置

// lastIndexOf()就是从后往前找，和index()一样

// res = a.indexOf('l');
// res = a.lastIndexOf('l');
// console.log(res);

res = a.indexOf('lo');
// console.log(res);

// charAt()可以确定字符串中指定位置的字符，根据索引来获取字符
var str = 'hello,nice to meet you';
res = str.charAt(5);
// console.log(res);

// charCodeAt()获取指定位置的Unicode编码
// String.formCharCode()可以根据字符编码来获取字符
res = String.fromCharCode(0x2693);
// console.log(res);

// split()可以将一个字符拆分为一个数组
// 参数：
    // 需要一个字符串作为参数，将会根据字符串去拆分数组
// res = str.split(',');
// res = str.split('me');

// 如果传递一个空串作为参数，则会一个一个地拆分
res = str.split("")
console.log(res);
