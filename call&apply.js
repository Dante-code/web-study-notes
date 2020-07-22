// call()和apply()这两个方法都是函数对象的方法，需要通过函数对象来调用
// 当对函数调用call()和apply()都会调用函数执行
// 在调用call()和apply()可以将一个对象指定为第一个参数
//     此时这个对象将会成为函数执行时的this
// call()方法可以将实参在对象之后依次传递
// apply()方法需要将实参封装到一个数组中统一传递



// this的情况:
// 1.以函数形式调用时，this永远都是window
// 2.以方法的形式调用时，this是调用方法的对象
// 3.以构造构造函数的形式调用时，this是指定的那个对象
// 4.使用call和apply调用时，this是指定的那个对象

function fun(a,b){
    console.log(this.name,a,b);
}

var a = {name:'hello'};
// fun();
fun.call(a,2,3);
fun.apply(a,[2,3]);