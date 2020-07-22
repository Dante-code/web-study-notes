// 原型对象
// 使用protostyle创建原型对象

function Myclass(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var m1 = new Myclass("孙悟空",502,"male");


// 使用 in  检查对象中是否含有某个属性，如果对象中没有但是原型中有，也会返回true
// console.log("age" in m1);
// console.log("a" in m1);

//可以使用对象hasOwnProperty()来检查对象自身中是否含有该属性
//使用该方法只有当对象自身中含有该属性时，才会返回true
// console.log(m1.hasOwnProperty("age"));
// console.log(m1.hasOwnProperty("a"));

// 原型对象也是对象，所以它也有原型：
//     当我们使用一个对象的属性或方法时，会先在自身中寻找，
//     如果自身有则直接使用，如果没有则去原型对象中寻找
//     如果原型对象中没有，则去原型的原型对象中寻找，直到找到object对象的原型
//     object对象的原型没有原型，如果object中没有，则返回undefined

// console.log(m1.__proto__.hasOwnProperty("hasOwnProperty"));
// console.log(m1.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
// console.log(m1.__proto__.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));

console.log(m1);