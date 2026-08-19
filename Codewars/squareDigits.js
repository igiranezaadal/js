function squareDigits(num){
  num=num.toString().split('')
  let result
    result=num.reduce((acc,cur)=>{
      acc+=Math.pow(cur,2)
      return acc
    },0)
  return result
}
console.log(squareDigits(3212)); // 9414
    console.log(squareDigits(2112)); // 4114
    console.log(squareDigits(0)); // 0
// console.log(squareDigits(9119)); // 811181