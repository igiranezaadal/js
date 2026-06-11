

// #### 2.Create a function that take 2 arrays and merge them
// You are given:
// ```jsx
// const arr1= [1,2,3];
// const arr2= [4,5,6];
// ```
// ### Task:
// 1. Merge both arrays into a new array called `merged`.
// 2. Add `0` at the beginning of the array.
// 3. Add `7` at the end of the array.
// ### Expected output:
// ```
// [0, 1, 2, 3, 4, 5, 6, 7]
// ```
// const arr1= [1,2,3];
// const arr2= [4,5,6];
// let merge=[...arr1, ...arr2];
// merge.unshift(0)
// merge.push(7);
// console.log(merge)




// #### 1.You are given an array of notifications. Each notification has a message and a delay.

// ```json
// const notifications= [
//   { message:"You have a new message", delay:1000 },
//   { message:"Your download is ready", delay:3000 },
//   { message:"Battery is low", delay:2000 },
//   { message:"Friend is online", delay:4000 }
// ];
// ```

// ### Task:

// Print each message using `setTimeout` after its given delay.

// Format:

// ```
// [1s] You have a new message
// [2s] Battery is low
// [3s] Your download is ready
// [4s] Friend is online
// ```

// const notifications= [
//   { message:"You have a new message", delay:1000 },
//   { message:"Your download is ready", delay:3000 },
//   { message:"Battery is low", delay:2000 },
//   { message:"Friend is online", delay:4000 }
// ];



// ### 3.Unique Products Report

// You are given an array of orders:

// ```java
// const orders= [
//   { customer:"Ali", product:"Laptop" },
//   { customer:"Sara", product:"Mouse" },
//   { customer:"Ali", product:"Laptop" },
//   { customer:"John", product:"Keyboard" },
//   { customer:"Sara", product:"Mouse" },
//   { customer:"Ali", product:"Monitor" }
// ];
// ```

// Task:

// - Use for of loop, Set, and destructuring

// Write a function `createReport(orders)` that returns:
const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];

for(let c of orders){
    let values=orders.push([orders.product])
}
console.log(values);
67 changes


