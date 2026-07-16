function uniqueSum(lst){
  //your magic code goes here
  let sum=0;
  for(let i=0;i<lst.length;i++){
    sum+=lst[i];
  }
  return sum;
}


console.log(uniqueSum([1,2,3]))
console.log(uniqueSum([1,2,2,2,4,6,8,9,56,3]))

