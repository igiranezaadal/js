// function sumArray(array) {
// function sumArray(array) {
//   // 1. Input validation: check for null, undefined, empty, or single-element arrays
//   if (!array || array.length <= 1) {
//     return 0;
//   }

//   // 2. Filter out non-numbers just in case, and sort ascending
//   const sorted = array
//     .filter((item) => typeof item === 'number' && !isNaN(item))
//     .sort((a, b) => a - b);

//   // Re-check length after filtering non-numbers
//   if (sorted.length <= 2) {
//     return 0;
//   }

//   // 3. Sum everything EXCEPT the first (lowest) and last (highest) elements
//   let sum = 0;
//   for (let i = 1; i < sorted.length - 1; i++) {
//     sum += sorted[i];
//   }

//   return sum;
// }
// }

// console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
// console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
// console.log(sumArray([3]));               // Output: 0
// console.log(sumArray([3, 5]));            // Output: 0
// console.log(sumArray(null));              // Output: 0



// function findUnique(numbers) {
//   let num;
//     // Return the unique number
  
//   numbers.split('').sort((a,b)=>a-b);
//   for(let i=0;i<numbers.length;i++){
    
//   }
//   return num
// }

// findUnique([1, 8, 4, 4, 6, 1, 8])
// findUnique([ 1234567 ])
// findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ])
// findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ])
// findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ])

// Write a function that takes an array of objects, where each object has an id and a name property. The function should return a new object where the keys are the id values and the values are the corresponding name values.
