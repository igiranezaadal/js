// ## Practical Challenge — First Successful API

// You have three API endpoints:

// const urls = [
//   "https://invalid.example.com/users",
//   "https://jsonplaceholder.typicode.com/users/1",
//   "https://jsonplaceholder.typicode.com/users/2"
// ];

// Your task is to request all three endpoints.

// Requirements:

// 1. Use `fetch()`.
// 2. Use a **Promise static method**.
// 3. A failed request must not automatically prevent successful requests from being considered.
// 4. Return the data from the **first successful request**.
// 5. HTTP responses such as `404` or `500` must also be treated as failures.
// 6. If every request fails, print:

// All servers failed

// Expected structure:

// *async function getFirstAvailableUser() {
//   // Your implementation
// }

// getFirstAvailableUser();*



const urls = [
  "https://invalid.example.com/users",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2"
];

async function getFirstAvailableUser(){
    try{
        let response=await fetch(urls)
        if(!response){
            throw new Error("can't fetch lite now");
            
        }
        // let data=
        // for(let c of urls){
        //     c
        // }
        // let [d1,d2,d3]=urls
        // let data=Promise.race([d1,d2,d3])
        let data=Promise.any([response])
        return data
    }
    catch(error){
        console.log(`hhhh${error}`)
    }

}
getFirstAvailableUser();


// console.log();