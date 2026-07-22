// Promise: is an object  that manages asychronous operations.

// It can be in one of three states: pending, fulfilled, or rejected. 
// A promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject. 
// The resolve function is called when the asynchronous operation is successful, 
// while the reject function is called when there is an error.



// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("walk the dog");
//         callback();
//     },1500);
// }
// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("clean the kitchen");
//         callback()
//     },2500);
// }

// function trash(callback){
//     setTimeout(()=>{
//         console.log("take out trash");
//         callback();
//     },500);
// }
// walkDog(()=>{
//     cleanKitchen(()=>{
//         trash(()=>{
//             console.log("all tash are finished");
            
//         })
//     })
// })



function walkDog(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkedDog=true;
            if(walkedDog)
                resolve("walk the dog 🐕‍🦺");
            else
                reject("didnt walk the dog");
        },1500);
    })
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned=true
            if(kitchenCleaned)
                resolve("clean the kitchen 🎂");
            else reject("you did not clean the kitchen")
    },2500);
    })
    
}
function trash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const takeOut=false
            if(takeOut){
        resolve("take out trash");
            }
        else reject("you did not take out the trash")
    },500);
    })
    
}

// console.log(walkDog());
// console.log(cleanKitchen());
// console.log(trash());
walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value=> {console.log(value); return trash()})
        .then(value=> {console.log(value); console.log("u finnished all the shores")})
        .catch(console.error)
        //debugg above code to work properly.
let a=[1,2,3];
a.forEach(element => {
    console.log(element);
});

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
FetchData(value => console.log(value));