function createPhoneNumber(numbers){
  const[n1,n2,n3,n4,n5,n6,...last4]=numbers;
  last=last4.join('');
  return `(${n1}${n2}${n3}) ${n4}${n5}${n6}-${last}`
  
//   let part=[n1,n2,n3];
//   part=part.join('')

//   let part1=[n4,n5,n6];
//   part1=part1.join('')

// //   let part2=[last4];
//   last=last4.join('')

//   let c=part.concat(part1)
// //   return '( ${part} ) 567-890'
//     return `(${part}) ${part1}-${last}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))