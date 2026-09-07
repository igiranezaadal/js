
function findInArray(array, iterator) {
  
  for(let c=0; c<array.length; c++){
    if(iterator(array[c], c)){
      return c;
    }
  }
  return -1;
};

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3

// console.log(findInArray([1,3,5,6,7], trueIfEven)) // == 3
// console.log(findInArray([2,4,6,8], trueIfEven)) //== 0
// console.log(findInArray([2,4,6,8], neverTrue) )//== -1
// console.log(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex)) //== 4
// console.log(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex)) //== 4
// console.log(findInArray(["bc","af","d","e"], trueIfLengthEqualsIndex)) //== -1
