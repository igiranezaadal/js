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
