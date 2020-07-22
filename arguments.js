// 在调用函数时，浏览器每次都会传递两个隐含参数：
//     1.函数的上下文对象  this
//     2.封装实参的对象    arguments
//         arguments是一个类数组对象，它可以通过索引来操作数据，也可以获取长度
//         在调用函数时，传递的实参都会在arguments中保存
//         arguments.length 可以获取实参的长度
//         即使不定义形参，也可以通过arguments来使用实参
//             arguments[0]    表示第一个实参
//             arguments[1]    表示第二个实参
//             ………
//         arguments里边还有一个属性叫callee,
//             这个属性对应一个函数对象

function fun(){
    console.log(arguments);
    console.log(arguments.length);
    console.log(Array.isArray(arguments));
    console.log(arguments[4]);
}
fun(1,2,3,4,'aaa',6,7);


