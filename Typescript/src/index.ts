// const message: string = "TypeScript setup is working perfectly!";
// console.log(message);
console.log('hello Adal');


// codewars
//  function noSpace(x:string):string {
//     // let result = x.replace(/\s/g, '');
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== ' ') {
//             result += x[i];
//         }
//     }
//     return result;
// }
// console.log(noSpace("hell Adal"));



// function descendingOrder(n: number|string): number {
//   // your code here
  
// //   let toText = String(n)
// //   toText = toText.reverse('')
// //   return Number(toText)

//     // n = String(n)
//     // return n.split('').sort((a,b)=>b-a).join('')

//   return Number(String(n).split('')
//                   .sort((a,b)=>Number(b) - Number(a))
//                   .join(''));
// }
// console.log(descendingOrder(12345));


function repeatStr (n:number, s:String):String {
  return s.repeat(n);
}
console.log(repeatStr(6, 'r'));
