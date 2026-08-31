// `async` and `await` are keywords in JavaScript that are used to work with asynchronous code in a more synchronous-like manner, 
// making it easier to read and write.
// Async make a functon return a Promise 
// await make a function wait for a promise 
//  funciton decraled as async cant be resolved or reject

// let a=1;let b=2;
// // console.log(a);
// setTimeout(()=>{
//     console.log('Timeout '+a);
// },100)

// a=10
// fetch('https://open.spotify.com/').then(()=>{
//     console.log("fetched successfully")
//     })


// console.log('synchronous code');
// console.log(a);
// console.log(b);
// function list(){
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             let a=true;
//             if(a){
//                 resolve("success");
//             }else{
//                 reject("error");
//             }
//     }, 1000);
// });
// }
// // async function test(){
// //     return Promise.all([list()]).then((value)=>{
// //         console.log(value);
// //     });
// // }
// console.log(list());
// function displayMessage() {
//     Promise.resolve("Hello, World!")
//     .then((message) => {
//         console.log(message);
//     });
// }
// console.log(displayMessage());

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }
// f();

// function doDishes(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('good disk washer!');
            
//         },1000)
//     });
// }
// function eatMore(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('eat eat eat!');
            
//         },2000)
//     });
// }
// function goggins(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('stay hard!');
            
//         },3000)
//     });
// }
//  async function te(){
//     await doDishes();
//     await eatMore();
//     await goggins();
//  }
//  console.log(te);
 



// Modern approach using Async/Await
async function fetchUserData(userId) {
  try {
    // Execution pauses here until the network request completes
    const response = await fetch(`https://example.com{userId}`);
    
    // Execution pauses here until JSON parsing completes
    const data = await response.json(); 
    
    return data; 
  } catch (error) {
    // Handles any network or parsing errors cleanly
    console.error("Failed to fetch data:", error);
  }
}
// Calling the function (remember, it returns a Promise)
fetchUserData(1)
  .then(user => console.log(user));



  // async function FetchData() {
//   // OMITTING AWAIT: returns a Promise object, NOT the actual data
//   const data = fetch("https://instagram.com"); 
//   console.log(data); // Logs: Promise { <pending> }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (data) {resolve("Data fetched successfully!");}
//         else {reject("Error fetching data.");}
//     }, 2000);
// });
// }
// FetchData(value => console.log(value));



//wakeRequest('Facebook').then(response =>
//console.log('Response Received')
return processRequest(response)
//)).then(processedResponse => (
// console.log(processedResponse)
//]).catch(err => [
// console.log(err)
async function dowork() {
try {
const response = await makeRequest("Facebook")
console.log('Response Received')
const processedResponse = await processRequest(response)
console.log(processedResponse)
} catch (err) {
console.log(err)
dowork()
}
}