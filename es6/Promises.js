// promises: is a built in object used to handle asychronous operation cleanly
// Synchronous:  tasks happen one at a time and you must wait for one to finish before moving to the next. 
// Asynchronous: tasks can happen independently, allowing a system to start a task and move on to others without waiting for the first to complete
const userData=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success) resolve({id:1,name:'alex'});
        else reject("failed to fetch user data");
        },1000)
});
console.log(userData)
console.log(userData.value)
console.log(typeof(userData))