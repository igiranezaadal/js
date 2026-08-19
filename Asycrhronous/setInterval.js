// let count = 0;

// // Execute every 1000 milliseconds (1 second)
// const counting = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
  
//   // Stop the interval after 5 iterations
//   if (count === 5) {
//     // clearInterval(iterate);
//     clearInterval(counting)
//     console.log("Interval cleared");
//   }
// }, 1000);

//setInterval is a built-in JavaScript function that repeatedly executes a specified function or code snippet at fixed time intervals (in milliseconds). It continues to run until it is explicitly stopped using clearInterval.
let counter=0
console.log('start');

let ada=setInterval(()=>{
  console.log(`counter ${counter++}`);
  if (counter==4) {
    clearInterval(ada)
    console.log('end interval');
  }
},1000)