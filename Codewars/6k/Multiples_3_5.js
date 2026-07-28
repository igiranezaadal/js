// function solution(number){
//     let c=0;
//     if(number<=0) return 0;
//     for(let num=1;num<number;num++){
//       if(num%3===0 ||num%5===0){
//         c+=num;
//       }
//     }
//     return c;
// }
// console.log(solution(10));
// console.log(solution(20));
// console.log(solution(100));

Promise.resolve().then(()=>console.log(1));
queueMicrotask(()=>console.log(2));
setTimeout(()=>console.log(3),0);
console.log(4);
new Promise(()=>console.log(5))

(async function(){console.log(6)})();



