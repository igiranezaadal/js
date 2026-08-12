function countBits(n) {
  let results = n.toString(2);
  let count = 0;
  for (let i=0; i<=results.length-1; i++)if(results[i]==1)count=count+1
  return count


}
console.log(countBits(1234));  //10011010010
