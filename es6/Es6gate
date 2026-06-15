// Task: Write a function named getEligibleUsers(users). The function should return a Map where:

// Each key is a user's id.
// Each value is the corresponding user object.
// Only users whose active property is true should be included.
// Duplicate users (based on id) should appear only once in the Map.
// The original users array must not be modified.

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 1, name: "Alice", active: true },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "David", active: false },
  { id: 3, name: "Charlie", active: true }
];
getEligibleUsers(users);

/*
Expected outcome

Map(2) {
  1 => { id: 1, name: "Alice", active: true },
  3 => { id: 3, name: "Charlie", active: true }
}
*/

function getEligibleUsers(arr){
    let map = new Map();
    let arr1 = [];
    let object = {};
    let nond = new Set();
    for (let ob of arr){
        if (ob.active===true){
            arr1.push(ob);
        }

    }let init = arr1[0];
    for (let i=1;i<arr1.length;i++){
        //object[obj.name]=(object[obj.name]||0)+1
        if (init.id===arr1[i].id){
            arr1.splice(i,1);
            init=arr1[i];

        }
        //nond.add({...obj});

    }
    // let nond= new Set([...arr1[]])
    return arr1;
}
console.log(getEligibleUsers(users));