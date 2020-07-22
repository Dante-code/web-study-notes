// concat()可以连接两个或多个数组，并将新的数组返回，该方法不会对原数组产生影响

var a = [1,2,3,4,'hi','china',11];
// var b = [4,5,6,7],c = ['mike','jack','lucy'];

// var res = a.concat(b,c,'tom','jerry');
// console.log(res);

// join()该方法可以将数组转化为一个字符串，该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回
// 在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符

// reverse()该方法用来反转数组，该方法会直接修改原数组，
// a.reverse();
// console.log(a);

// sort()可以用来对数组元素进行排序，也会影响原数组，默认按照unicode编码进行排序
// 所以对纯数字进行排序，可能会得到错误的结果
// a.sort();
// console.log(a);

var arr = [5,2,11];

// 可以在sort()中添加一个回调函数，来指定排序规则,
//      回调函数需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数
//      使用哪个元素调用不确定，但是肯定的是在数组中a一定在b的前面
//      浏览器会根据函数的返回值来决定元素的顺序
//      如果返回一个大于0的值，则元素会交换位置
//      小于0的值，则元素位置不变
arr.sort(function(a,b){
    console.log('a =',a);
    console.log('b =',b);
})
console.log(arr);

arr.sort(function(a,b){
    return b-a;
})
console.log(arr);