// function transformToObject(users){

// z
// }
// const users = [
//   { id: 1, name: 'Alicen' },
//   { id: 2, name: 'Bob marley' },
//   { id: 3, name: 'Charlie kirk' },
// ];

// const transformed = transformToObject(users);
// console.log(transformed); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }





// let myObject = { oldKey: "some data" };
// myObject["newKey"] = myObject["oldKey"];
// delete myObject["oldKey"];



function lexicalScope(){
  let count=0
  return function(){
    count+=1
    return count
  }
}
console.log((lexicalScope));
let counter=lexicalScope();
const max=6
for(let c=1;c<max;c++){
console.log(counter());
}
