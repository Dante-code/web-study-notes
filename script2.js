/*
    垃圾回收(GC)    将不需要的对象设置为 null 即可
*/
// 数组
/*
    创建数组对象
 */
var arr = new Array();
// arr[0] = 10;
// arr[1] = 33;
// arr[2] = 44;
// arr[3] = 55;
// arr[20] = 44
// console.log(arr[10])

// 获取数组长度可以使用length属性
// 语法：数组.length

// 非连续数组中间未赋值的都是undefined

// console.log(arr);
// console.log(arr.length);

// arr.length = 10;
// console.log(arr);        增长数组
// 也可以人为修改arr.length，相当于人为修改数组长度

//arr.length = 2
//console.log(arr)        //剪短数组
// 剪短数组后，多余部分数据被舍掉

// 也可以用[]来创建数组
var arr2 = [];
// console.log(typeof arr,typeof arr2);
// arr2 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr2);

var arr3 = new Array(10,20,30); //数组长度为3
var arr4 = new Array(10);   //定义了一个长度为10的数组
var arr5 = [10];            //数组长度为1
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// 注意上面三个数组的区别   Array()里面只有一个数的时候要注意

// 数组中的元素可以是任意数据类型，也可以是对象或函数
arr = [function(){console.log('hello world')},function(){}];
console.log(arr);
arr[0]();




