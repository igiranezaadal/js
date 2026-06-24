

function digitize(n) {
  let arr = n.toString().split('').map(Number);
  return arr.reverse();
}
console.log(digitize(35231));



// function digitize(n) {
//   let num = String(n);
//   let newArray = [];
  
//   for (let i=num.length-1; i>=0; i--) {
//     let element = Number(num[i]);
//     newArray.push(element); 
//   }
//   return newArray;
// }
// console.log(digitize(35231));
console.log(digitize(0));