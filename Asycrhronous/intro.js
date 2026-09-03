// let flow=new Promise((resolved,rejected)=> resolved(console.log("resolved sucess")));
// console.log(flow) 

// function test(dd){
// return new Promise((reject,resolve)=>{
//     for(const c of dd){
//     setTimeout(()=>{
//         setInterval(()=>{
//     },2000);
//         console.log(`hello ${c}`);
//     }, 2000);
// }
// });
// }
// console.log(test(["a","b","c"]));



// // 1. Start with the status as "pending"
// let status = "pending"; 

// // 2. Your promise (e.g., waiting 2 seconds)
// const myPromise = new Promise((resolve) => setTimeout(resolve, 2000));

// // 3. Update the variable when it finishes
// myPromise
//   .then(() => { status = "fulfilled"; })
//   .catch(() => { status = "rejected"; });

// // 4. Check the variable whenever you want
// console.log(status); // If checked immediately, logs: "pending"




// let status = "pending";

// // Change this to true to test SUCCESS, or false to test REJECT
// const shouldSucceed = true; 

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (shouldSucceed) {
//       resolve("Data arrived!");
//     } else {
//       reject("Error: Connection failed");
//     }
//   }, 2000);
// });

// // Watch for the state change
// myPromise
//   .then((data) => { 
//     status = "fulfilled"; 
//     console.log("Status:", status, "-", data);
//   })
//   .catch((error) => { 
//     status = "rejected"; 
//     console.log("Status:", status, "-", error);
//   });
// // Check it instantly before the 2 seconds finish
// console.log(status); 

// function digitalRoot(n) {
//     n=n.toString();
//     return n
// }
// console.log(digitalRoot(typeof(16)));

// let result=2;
// console.log(result)
// result=undefined
// setTimeout((result = 5)=> {
//     return result;
// }, 0);
// console.log(result)



// console.log("Start");

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// // while (true) {}
// console.log("End");

// let success=false;
// function tryagain(){
//     console.log("try again")
// }
// for(let i=0;!success<5;i++){
//  console.log(tryagain())
//  if(1==10) break;
// }


// Promise.resolve(5)
//   .then(num => {
//     console.log("First adal:", num);
//     return num * 2;
//   })
//   .then(num => {
//     console.log("Second adal:", num);
//     return num + 10;
//   })
//   .then(num => {
//     console.log("Third adal:", num);
//     return num / 3;
//   })
//   .then(result => {
//     console.log("last adal.com:", result);
//   });


//   function double(num) {
//   return Promise.resolve(num * 2);
// }

// Promise.resolve(5)
//   .then(double)
//   .then(double)
//   .then(double)
//   .then(result => console.log(result));


//   // Adal
//   // q1. what is Promise.withResolvers() amd what does it handle?  hint?(.race=first resolved(), .any()=first fullfilled(either resolve or reject))
//   // q2. what do u understand by the word Execution context
//   // q3. compare call stack to event looping
//   // q4. How does  a forEach() and map() or for...of behave with promises?
//   // q5. What is the difference between concurrency and parallelism programming paradigms?



// 1. Global Execution Context is created.
// 2. Variable Environment registers 'globalMessage' and 'firstTask'.
const globalMessage ="Main thread item";
function firstTask() {
// 3. Pushed to Call Stack. New Function Context & Variable Environment created.
const localMessage ="Inside function";
  console.log(localMessage);
  // 4. Handed off to browser API. Timer starts in background.
  setTimeout(() => {
  // 7. Event Loop pushes this here *only* after Step 6 is done.
    console.log("Async callback executed!");
  },0);
  // 5. Pops off the Call Stack.
}
firstTask();
// Invokes the function stack trace
console.log(globalMessage);
// 6. Runs immediately. Call Stack is now completely