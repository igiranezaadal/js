// 2. Write a function that takes an array of objects, where each object has a `type` property. 
// The function should return an object where the keys are the unique `type` values, 
// and the values are the number of occurrences of that type in the input array.

//jsx
// const items = [
//   { type: 'fruit' },
//   { type: 'vegetable' },
//   { type: 'fruit' },
//   { type: 'fruit' },
//   { type: 'vegetable' },
//   { type: 'grain' },
// ];

// const counts = groupByAndCount(items);
// console.log(counts); // Output: { fruit: 3, vegetable: 2, grain: 1 }
//
// function groupByAndCount(items) {
//   const result = {};

//   for (let item of items) {
//     const type = item.type;
//     if (result[type]) {  //if exists in the empty object
//       result[type]++;
//     } else {
//       result[type] = 1;
//     }
//   }
//   return result;
// }
// const items = [
//   { type: 'fruit' },
//   { type: 'vegetable' },
//   { type: 'fruit' },
//   { type: 'fruit' },
//   { type: 'vegetable' },
//   { type: 'grain' },
// ];
// const counts = groupByAndCount(items);
// console.log(counts);

function solution(str, ending){
  if(typeof(str) == "string"){
      // str.split('');
      // str.split('');
      // for(i=0;i<str.length;i++){
      //   if(str[i] == ending[i]){
      //     return false
      //   }
      // else return true
      // }

    if(str.endsWith(ending)) return true;
    else return false
    }
    else return false
}
solution('abcde', 'cde');