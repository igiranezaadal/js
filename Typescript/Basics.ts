// let txt="typescript is superset of Js"
// console.log(txt);
// array
// let ids: number[]=[1,2,3,4,5]
// let arr: any[]=[`heloo ${ids}`, 2 , 0.001 , ids , true]
 
// // tuples
// let person: [number, String,boolean]=[67, 'hey', false]
// console.log(ids);
// console.log(arr.sort((a,b)=>b-a));
// console.log(person);

// // tuples arr
// let employee: [number, string][]=[
//     [1, 'adal'],
//     [2, 'others1'],
//     [3, 'others2']
// ]
// console.log(employee);

// Symbol
const unique_key=Symbol();
let obj={
    [unique_key]: "secretValue"
}
// console.log(obj)
// console.log(obj[unique_key])
// console.log('testing');

// null undefined
let empty: null=null
let ud: undefined
console.log(empty)
console.log(ud)
// object
let adal:object ={ name: 'bob' }
// console.log(adal);
// function void
function log():void{
    console.log('log');
    // return 'return'
}
log()

// Enum(enumeration ): is collection of reelated values that can be numeric or string
// enum  color {red, green, blue}
// let c: color=color.green
// console.log(c);
 
// any : is supertype of all datatypes in TypeScript
let someThing: any =adal 
console.log(someThing);

// type vs interface
type User={ name: string}
let user: User ={name: "type in TS"}
console.log(user);
// type annotation: is basically giving type to the variable in TypeScript

