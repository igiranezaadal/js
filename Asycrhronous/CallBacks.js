// 3000
// 2000
// 1000
// 2500
function cb1(){
    setTimeout(()=>{
        console.log("task 1");
        cb2()
    },3000)
    
    function cb2(){
        setTimeout(()=>{
        console.log("task 2 ");
        cb3()
        },2000)
        function cb3(){
            setTimeout(()=>{
            console.log("task 3 ");
            cb4()
            },1000)
            function cb4(){
                setTimeout(()=>{
                console.log("task 4 ");
                
                },2500)
            }
            
        }
        
    }
    
} 
cb1()
// cb1(()=>{
//     cb2(()=>{
//         cb3(()=>{
//             cb4()
//         })
//     })
// });
