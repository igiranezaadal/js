function nthSmallest(...arrs) {
//   let counter=0;
//   let result
  let n=arrs.pop()
  arrs=arrs.flat().sort((a,b)=>a-b)
//   let set=[new Set(arrs)]
//   const fourth = [...set][3]; 


//   for(let c=1 ;c<set.length;c++){
//     counter++
//     if (counter===4)
//         return set.values
//   }
//   return fourth

return arrs[n - 1];
}
console.log(nthSmallest([1,5], [2], [4,8,9], 4)) // returns 5 because it's the 4th smallest value
console.log(nthSmallest([3,3,2,2,2],2))