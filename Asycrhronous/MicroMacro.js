// console.log("task")

// setTimeout(()=>{
//     console.log('timer');
// },100)
// Promise.resolve()
//     .then(()=>{
//         setTimeout(()=>{
//             console.log('time12');
//         },1000)
//     })
//     .then(()=>{
//         setTimeout(()=>{
//             console.log('time23');
//         },2000)
//     })
//     .then(()=>{
//         let count=0
//         let th=setInterval(()=>{
//             console.log('time34');
            
//             count=count+1
//             if(count === 5){
//             clearInterval(th);
//     }
//         },3000)
//     })
// console.log('end');


// let count = 0;

// let interval = setInterval(function(){
//     count += 1;
//     if(count === 5){
//         clearInterval(interval);
//     }
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);

// }, 2000);


// console.log(1);
// setTimeout(() => { console.log(2);
//  new Promise((resolve) => { 
//  console.log(3); 
// 	setTimeout(() => { 
// 	console.log(4); 
// 	resolve(5); 
// 	 }, 0); 
//  })
// .then((val) => { 
// 	console.log(val);
// 	}); 
// console.log(6);
// }, 0);

// Promise.resolve().then(() => { console.log(7);
// });
// console.log(8);
// //1 8 7 2 3 6 4 5


// async function foo() {
//   console.log(1);
//   await null;
//   console.log(2);
// }
// console.log(3);
// foo();
// console.log(4);
// //3 1 4 2



console.log(1);
queueMicrotask(() => console.log(2));
Promise.resolve().then(() => {
  console.log(3);
  queueMicrotask(() => console.log(4));
});
Promise.resolve().then(() => console.log(5));
console.log(6);
// 162354


