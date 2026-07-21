// let flow=new Promise((resolved,rejected)=> resolved(console.log("resolved sucess")));
// console.log(flow) 

function test(){
return new Promise((reject,resolve)=>
    setTimeout(()=>{
         console.log("Tesing Promises");
    }
, 2000)
);
}
console.log(test())
