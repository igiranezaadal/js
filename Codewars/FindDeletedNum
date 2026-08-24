function findDeletedNumber(arr, mixArr) {
  for(const c of arr){
    if (!mixArr.includes(c))
      return c
  }
   return 0
//   return arr.find(val => !mixArr.includes(val)) || 0;

}
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5])) // 2
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5,2])) // 0
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5,2,6])) // 0