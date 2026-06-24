// let array=["Banana", "Orange", "Apple", "Mango"]
// console.log("Before sort");
// console.log(array)
// console.log("After sort");
// console.log(array.sort())
//min
// let number=[6,57,5]
// console.log(number)
// console.log(Math.min(...number));



// function groupStudentsByCourse(studentArray) {
//   const courseMap = new Map();

//   for (const { name, grade, courses } of studentArray) {
//     // We only want students with a grade of 70 or above
//     if (grade >= 70) {
//       for (const course of courses) {
//         // If the course doesn't exist in the map yet, initialize it with an empty array
//         if (!courseMap.has(course)) {
//           courseMap.set(course, []);
//         }
//         // Push the student's name into the course's array
//         courseMap.get(course).push(name);
//       }
//     }
//   }
//   return courseMap;
// }


// function findprimeNumbers(num) {
//   let primeNumbers = [];
//   for (let i = 2; i <= num.length; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primeNumbers.push(i);
//     } 
//   }
//   return primeNumbers;
// }
// console.log(findprimeNumbers([10, 15, 20, 30]));
// problems






array=[3,'text',{}];
console.log(array)