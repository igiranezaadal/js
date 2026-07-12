// let t=1; let t2=2;
// [t , t2] = [t2 , t]

// console.log(t)
// console.log(t2)
// let p=new Promise((rejected,resolved)=>console.log("promise"))
// console.log(p);

// const colors=['red', 'green','blue', 'black' , 'white'];
// [colors[0], colors[4]]=[colors[4], colors[0]]
// console.log(colors);

const colors=['red', 'green','blue', 'black' , 'white'];
const [color1,color2,color3, ...rem_clrs] = colors
console.log(color1);
console.log(color2);
console.log(color3);
console.log(rem_clrs);

