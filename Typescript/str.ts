let txt="typescript is superset of Js"
console.log(txt);

let ids: number[]=[1,2,3,4,5]
let arr: any[]=[`heloo ${ids}`, 2 , 0.001 , ids , true]
 
// tuples
let person: [number, String,boolean]=[67, 'hey', false]
console.log(ids);
console.log(arr.sort((a,b)=>b-a));
console.log(person);

// tuples arr
let employee: [number, string][]=[
    [1, 'adal'],
    [2, 'others1'],
    [3, 'others2']
]
console.log(employee);


