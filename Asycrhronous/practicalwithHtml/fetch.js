const cart=['shoes','shirts','pants'];
const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId){
    // ProccedToPayment(orderId);
    console.log(orderId);
})
    .catch((err)=>{
        console.log(err);
    })
////// producer

function createOrder(){
    const pr= new Promise((resolve,reject)=>{
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err=new Error('cart is not valid')
            reject(console.error())
        }
        // else{}
        const orderId="12345";
        if(orderId){
            setTimeout(()=>{
                resolve(console.log(orderId))
            },5000)
        }
    })
    return pr;
}
function validateCart(){return false;}