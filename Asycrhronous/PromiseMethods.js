// const promise1=Promise.resolve(3)
// const promise2=42
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,"foo")
// })
//  async function geet(e){return e;}
// // console.log(promise1); // wrong way to display a promise

// // console.log(promise2);
// console.log(typeof(resolve));
// console.log(typeof(geet));
// Promise.all([promise1,promise2,promise3]).then((value)=>{
//     console.log(value);
// })


// let resolve, reject;
// const promise = new Promise((res, rej) => {
//   resolve = res;
//   reject = rej;
// });


// const { promise, resolve, reject } = Promise.withResolvers();
// console.log(resolve)
// console.log(reject)
// console.log(promise)

// const { promise, resolve } = Promise.withResolvers();
// submitButton.addEventListener("click", () => {
//   resolve("User clicked submit!");
// });
// const result = await promise;



// console.log("Start");
// setTimeout(() => {
//     console.log("Hello");
// }, 0);

// console.log("End");



// // racing the event loop with promises and setTimeout
// const adal =new Promise((resolve)=>{
//             resolve("run adal");

//         setTimeout(()=>{
//             console.log("adal finished running");
//         },3000)
//     });
// const matt = new Promise((resolve)=>{
//             resolve("run matt");

//         setTimeout(()=>{
//             console.log("matt finished running");
//         },2000)
//          });
// console.log("Start Promise");


// // Promise.all([adal,matt])
// // Promise.race([adal,matt])
// Promise.any([adal,matt])
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })
// // console.log("End");



// Error Hnadling in Asynchronous Functions with Error-First Callbacks
// 1. Defining the asynchronous function
// function fetchUserData(userId, callback) {
//   setTimeout(() => {
//     if (!userId) {
//       // Pass the error as the first argument, result is omitted
//       return callback(new Error("User ID is required.")); 
//     }
//     const mockUser = { id: userId, name: "Alex" };
//     // Pass null as the error argument, followed by the result data
//     callback(null, mockUser); 
//   }, 1000);
// }

// // 2. Consuming the function with an error-first callback
// fetchUserData(null, (err, data) => {
//   // Always check for the error first
//   if (err) {
//     console.error("An error occurred:", err.message);
//     return; // Exit early to prevent executing success logic
//   }

//   // Safe to process data here
//   console.log("Success:", data.name);
// });


// divideNumbers(10, 0, (err, result) => {
//   if (err) {
//     console.error("An error occurred:", err.message);
//     return;
//   }

//   console.log("Success! Result is:", result);
// });


// adalPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Adal's promise resolved!");
//   }, 3000);
// });

// mattPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Matt's promise resolved!");
//   }, 2000);
// });

// Promise.allSettled([adalPromise, mattPromise
// ]);

function fetchDataFromApi(){

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const data = {result:"some data from api"};
      resolve(data);
    },1000);
});
}
fetchDataFromApi()
.then((data)=>{
  console.log("user profile for UI",data.result);
})




function fetchDataFromApi(){
  let resolve, reject;
  return new Promise((resolve_, rej) => {
    resolve = resolve_;
    reject = rej;
  });
} 
setTimeout(() => {
  const data = {result:"some data from api"};
  resolve(data);
}, 1000);
fetchDataFromApi()
.then((data)=>{
  console.log("user profile for UI",data.result);
})




let {promise, resolve, reject} = Promise.withResolvers();
setTimeout(() => {
  const data = {result:"some data from api"};
  resolve(data);
}, 1000);
setTimeout(() => {
  const error = new Error("Failed to fetch data from API");
  reject(error);
}, 1500);
fetchDataFromApi()
.then((data)=>{
  console.log("user profile for UI",data.result);
})
.catch((error)=>{
  console.error("Error fetching data:", error.message);
});
