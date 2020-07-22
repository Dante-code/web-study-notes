var a = ['孙悟空','猪八戒','沙和尚'];

// push()
// 该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度
// 可以将要添加的元素作为方法的参数传递
// 这样这些元素将会自动添加到数组的末尾

var res = a.push('唐僧');
console.log(a);
console.log(res);

// push()的返回值是数组新的长度
res = a.push('白龙马','如来佛祖','观音菩萨');
// console.log(a);
// console.log(res);

// pop()
// 该方法可以删除数组的最后一个元素,并返回删除的元素

res = a.pop();
console.log(a);
console.log(res);

// res = a.pop();
// console.log(a);
// console.log(res);

// res = a.pop();
// console.log(a);
// console.log(res);

// unshift()
// 向数组开头添加一个或多个元素，并返回新的数组长度
// 向前面插入元素以后其他元素索引依次调整
res = a.unshift('太上老君','王母娘娘');
console.log(a,res);

// shift可以删除数组的第一个元素，并作为返回值返回
res = a.shift();
console.log(a,res);
