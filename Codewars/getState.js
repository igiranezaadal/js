function getState(promise) {
  

// // return new Promise((resolve,reject) => {
// const p = new Promise((resolve,reject) => {
//   if(promise)
//     resolve("fulfilled");
//   else if(promise)
//     reject("rejected");
    
//   if(promise)
//     return "pending"
// });
// return p

  const marker = {};//empty for pending, variable for comparison 

  return Promise.race([promise, marker])
    .then(
      function(val) {
        if (val === marker) {
          return "pending";
        } else {
          return "fulfilled";
        }
      },
      function() {
        return "rejected";
      }
    );
}
console.log(getState(Promise.resolve(1))); // "fulfilled"
console.log(getState(Promise.reject(1))); // "rejected"