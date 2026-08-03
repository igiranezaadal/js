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



// racing the event loop with promises and setTimeout
const adal =new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("adal activated");
        },1000)
    });
const matt = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("matt rejected");
        },2000)
    });
console.log("Start");
Promise.all([adal,matt])
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})
// console.log("End");
