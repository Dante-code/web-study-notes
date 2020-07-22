// JS提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
// 但是不要用


// String()
//     可以将字符串转换为String对象
// Number()
//     可以将数字转换为Number对象
// Boolean()
//     可以将布尔值转换为Boolean对象

var num = new Number(3);
var str = new String('hello');
var bool = new Boolean(true);
console.log(num,typeof num);
console.log(str,typeof str);
console.log(bool,typeof bool);