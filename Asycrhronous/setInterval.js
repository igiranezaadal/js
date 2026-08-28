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
// let counter=0
// console.log('start');

// let ada=setInterval(()=>{
//   console.log(`counter ${counter++}`);
//   if (counter==4) {
//     clearInterval(ada)
//     console.log('end interval');
//   }
// },1000)


// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
let counter=1
let times=setInterval(()=>{
    console.log(`hello ${counter++} times`);
    if(counter==6) {
        clearInterval(times)   
        console.log('Execution stopped.');
 
    }
},1000)



// function repeat_Function(fn, interval) {
//   fn();
//   const intervalId = setInterval(fn, interval);
//   return function stopExecution() {
//     clearInterval(intervalId);
//     console.log('Execution stopped.');
//   };
// }
// const intervalMs = 1000;
// function printMessage() {
//   console.log('Executing the function...');
// }
// const stopExecution = repeat_Function(printMessage, intervalMs);
// setTimeout(() => {
//   stopExecution();
// }, 4000);
