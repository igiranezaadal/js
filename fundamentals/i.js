// function sayHello(name) {
//   console.log('Hello, ' + name);
// }
// sayHello('VS Code');

// function numberToString(num){
//     return String(num);
// }
// console.log(typeof(numberToString(123)))


function uniqueSum(lst){
  //your magic code goes here
  let sum=0;
  for(let i=0;i<lst.length;i++){
    sum+=lst[i];
  }
  return sum;
}
uniqueSum([1,2,3]);