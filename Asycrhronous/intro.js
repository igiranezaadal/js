// let flow=new Promise((resolved,rejected)=> resolved(console.log("resolved sucess")));
// console.log(flow) 

function test(dd){
return new Promise((reject,resolve)=>{
    for(const c of dd){
    setTimeout(()=>{
        setInterval(()=>{
    },2000);
        console.log(`hello ${c}`);
    }, 2000);
}
});
}
console.log(test(["a","b","c"]));
