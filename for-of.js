const num = [22,321,32,1,42,42,3];
// for(let i of num){
//   console.log(i);
// }
function Obj(){
  this.id = 100,
  this.price=231,
  this.name = 'robot',
  this.count=1,
  this.isBuy=true
}
// for(let item in obj){
//   console.log(item,obj[item]);
// }
// for(let item of Obj){
//   console.log(item);这个不行
// }

let newnum = num.filter((i)=>{
  if(i<=100){
    return true;
  }
  else return false;
})
// for(let i of newnum){
//   console.log(i);
// }

newnum = num.reduce((i)=>{
  return i++;
})
console.log(newnum)