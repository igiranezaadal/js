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
