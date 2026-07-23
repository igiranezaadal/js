
// let count=0;let Arr=[0,1,2,3,4]
// console.log(`start counting at ${count}`);
// for(const c of Arr){
// const test=setTimeout(()=>{
  
//     count++;
//     console.log(`timeout count ${count}`);
// },2000);
// }

console.log("Start");

// Schedule execution after 2000 milliseconds (2 seconds)
const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

// Output Order: 
// 1. "Start"
// 2. "End" (Demonstrates non-blocking behavior)
// 3. "Executed after 2 seconds"
