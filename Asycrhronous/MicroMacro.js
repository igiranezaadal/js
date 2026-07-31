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


let count = 0;

let interval = setInterval(function(){
    count += 1;
    if(count === 5){
        clearInterval(interval);
    }
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);