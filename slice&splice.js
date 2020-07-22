// slice() 数组切片 跟python切片类似    不过没有python切片那样强大
// slice(start,end)  start<=i<end
var a = [1,2,3,4,'aaa','bbb','ccc',5,6,7,8,9,10];
// console.log(a.slice(0,6));
// console.log(a.slice(6));
// console.log(a.slice(6,-1));




// splice可以用来删除数组中的指定元素
// 会影响到原数组,并将被删除的元素作为返回值返回
// 参数：
//      第一个，表示开始位置的索引
//      第二个，表示删除的数量
//      第三个及以后可以传递一些新元素，这些元素将会自动插入到开始位置索引的前边
//      ***     可以splice(pos,0,....)
//              数量为零是可以当作插入元素来使用

console.log(a.splice(4,0,'^.^'));
console.log(a);