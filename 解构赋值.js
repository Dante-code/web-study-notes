//解构对象
let obj = {name:'小红',age:18,gender:'female'};
let {name}=obj;
// console.log(name);
/**
 * 注意解构对象的时候，等号左边变量名字必须是右边对象已有的属性名字
 * 变量个数不必等于属性个数
 */
let {gender,age}=obj;
// console.log(gender,age);

//解构数组
let arr = [1,2,3,5,'hello',true];
let [,,a,,b,c]=arr;
console.log(a,b,c);

let arr2 = [1,[[2],3]];
let [d,[[],e]] = arr2;
//左右两边的结构必须一样
console.log(d,e);
