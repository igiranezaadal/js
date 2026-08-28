// // const cart=['shoes','shirts','pants'];
// // const promise = createOrder(cart);
// // console.log(promise);

// // createOrder(cart)
// //     .then(function (orderId){
// //         // ProccedToPayment(orderId);
// //         console.log(orderId);
// //         return orderId;
// //     })
// //     .then((orderId)=>{
// //         return ProccedTifoPayment(orderId);
// //     })
// //     .then((paymentInfo)=>{
// //         console.log(paymentInfo);
// //     })
// //     .catch((err)=>{
// //         console.Error(err);})
// // ////// producer

// // function createOrder(){
// //     const pr= new Promise((resolve,reject)=>{
// //         //createOrder
// //         //validateCart
// //         //orderId
// //         if(!validateCart(cart)){
// //             const err=new Error('cart is not valid')
// //             reject(console.error())
// //         }
// //         // else{}
// //         const orderId="12345";
// //         if(orderId){
// //             setTimeout(()=>{
// //                 resolve(console.log(orderId))
// //             },5000)
// //         }
// //     })
// //     return pr;
// // }

// // function ProccedToPayment(){
// //     return new Promise((resolve,reject)=>{
// //         resolve('Payment is successful')
// //     })
// // };

// // function validateCart(){return false}







// // fetch('https://jsonplaceholder.typicode.com/users', {
//     fetch('https://reqres.in/api/users',{
//     method: 'POST',
//     body: {
//         name: 'user1'
//     }
// } )
// // fetch('https://reqres.in/api/users')
//     .then(res=>{
//         // if(res.ok){
//         //     console.log('success')
//         // }
//         // else{
//         //     console.log('Not success')
//         // }
//         return res.json()
//     })
//     .then(data=>console.log(data))
//     .catch(err=>consolelog('ERROR'))


// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//      if (!response.ok) throw new Error(`Status: ${response.status}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// }

// fetch('https://api.github.com/users')
// .then((response)=>{
//     if (!response.ok) {
//         throw new Error(`Status: ${response.status}`);}
//     else{
//         return response.json()
//     }})
//     .then((msg)=>{
//         console.log(msg[0]);
        
//     })
//     .catch((error)=>{
//         console.log(error);
        
//     })



// const apiUrls = [
//   'https://jsonplaceholder.typicode.com/posts/4',
//   'https://jsonplaceholder.typicode.com/posts/5',
//   'https://jsonplaceholder.typicode.com/posts/6'
// ];
// // Write a JavaScript function that fetches  data from multiple APIs concurrently and returns
// //  a combined result using Promises and 'Promise.all()'.

// let multiple=async()=>{
//     // let promise=new Promise(()=>{})
//     // let delay=setTimeout(()=>{
//     //     console.log('delayed display')
//     // })
//     return await fetch(apiUrls)
    

//     // return new Promise((resolve,reject)=>{
//     //     console.log('starting promise');
//     // })
// }
// multiple().then((data)=>{
    
// })




let url='https://pokeapi.co/api/v2/pokemon/PIKACHU'
const re=async()=>{
  let getData=await fetch(url)
}