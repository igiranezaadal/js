// let student=async()=>{
//     let data=await fetch("https://jsonplaceholder.typicode.com/users");
//     let result=await data.json();
//     console.log(result.users);
// }
// student()

// async function usetryCatch() {
//     try{
//         console.log('start')
//         let data1=await fetch("https://jsonplaceholder.typicode.com/users");
//         let result1=await data1.json()

//         setTimeout(()=>{
//             console.log(result1)
//         },1000)
//     }
//     catch{
//         if(!JSON.OK){
//             console.log('cant fetch data lite, Please try again later!')
//         }
        
//     }
// }
// usetryCatch()


const menu=[
    {name: "margherita", price: 8 },
    {name: "Pepperoni", price: 10 },
    {name: "Hawaiian", price: 10 },
    {name: "Vegie", price: 8 },
]

const cashInRegister = 100;
const order = {};

/** 
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */
function addNewPizza(){
    menu.push({ name: "Adal", price: 13 })
    console.log(menu)
}
addNewPizza()