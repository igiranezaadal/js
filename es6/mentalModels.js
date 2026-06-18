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




//qestion 1
// 1. Write a function that takes an array of objects, where each object has an `id` and a 
// `name` property. The function should return a new object where the keys are the `id` values 
// and the values are the corresponding `name` values.
    
//     ```jsx
//     const users = [
//       { id: 1, name: 'Alice' },
//       { id: 2, name: 'Bob' },
//       { id: 3, name: 'Charlie' },
//     ];
    
//     const transformed = transformToObject(users);
//     console.log(transformed); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }

//     ```

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];


function transformToObject(users) {
  const result = {};

  for (let user of users) {
    //loop through all the elements of the array which are objects
    result[user.id] = user.name;  //results is an empty object we set the id as the key and the name as the value of  
  }                               //in the first element in the array and repeat for all the elements

  return result;
}
//js program to check for prime number given by the users
// js programm to print fibonacci serries of number, range is given by the user