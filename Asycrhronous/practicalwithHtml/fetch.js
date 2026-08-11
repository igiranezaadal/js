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

fetch('https://api.github.com/users')
.then((response)=>{
    if (!response.ok) {
        throw new Error(`Status: ${response.status}`);}
    else{
        return response.json()
    }})
    .then((msg)=>{
        console.log(msg[0]);
        
    })
    .catch((error)=>{
        console.log(error);
        
    })