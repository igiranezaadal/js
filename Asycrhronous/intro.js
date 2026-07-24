// let flow=new Promise((resolved,rejected)=> resolved(console.log("resolved sucess")));
// console.log(flow) 

function test(dd){
return new Promise((reject,resolve)=>{
    for(const c of dd){
    setTimeout(()=>{
        setInterval(()=>{
    },2000);
        console.log(`hello ${c}`);
    }, 2000);
}
});
}
console.log(test(["a","b","c"]));



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