function findOdd(A) {
  //happy coding!
  // let odd=0
  // for (let i=0;i<A.length;i++){
    // init=A[i];
    
    // // else if(init%2!==0){
    // //   init=A[i];odd=0
    // //   } 
    // if(odd %2==0){
    //     return odd
    // }
    // for(c of A){
    //     if(init==A[i]){
    //   odd++;
    // }
    //     if(odd %2!==0){
    //         return odd
    //     }
    // }

  // }
//   return odd
for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
            count++;
        }
    }
    if (count % 2 !== 0) {
        return A[i];
    }
    
}}
console.log(findOdd([1,1,2]));
console.log(findOdd([10]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));
