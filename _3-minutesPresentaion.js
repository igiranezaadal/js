// timers in js

// How timers work
// console.log('start');
// setTimeout(()=>{
//     console.log('delayed')
// },0)
// console.log('end');
// //start
// //end
// //delayed


// let timer=setTimeout(()=>{
//     console.log(`hello timer`)
// },1000)
// clearTimeout(timer)
// // canceled timer
// // if no clearInteval 
// //hello timer


// let count = 0;
// const counting = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
//   if (count === 5) {
//     clearInterval(counting)
//     console.log("Interval cleared");
//   }
// }, 1000);
// counting
// // Interval count: 1
// // Interval count: 2
// // Interval count: 3
// // Interval count: 4
// // Interval count: 5
// // Interval cleared




for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
console.log("Loop finished!");
