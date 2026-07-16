// function sc(arr){
  
//   let c=0;let repeat;let newArr;
//   for(let a=0;a<=arr.length;a++){
//     if(arr[a]==undefined && arr[1]==undefined) return arr
//     // if(repeat=a[0])continue
//   } mine
// }

// Elumine
function sc(arr){
  let obj = {};
  // let flat = arr.flat(Infinity);
  // for (let el of flat){
  //   obj[el]=(obj[el]0)+1;
  // }

  for (let ar of arr){
    for (let k of ar){
      obj[k]=(obj[k]0)+1;
    }
  }
  let max = 0;
  for (let p in obj){
    if (obj[p]>max){
      max = obj[p];
    }

  }
  let removable = [];
  for (let el in obj){
    if (obj[el]===max){
      removable.push(Number(el));
    }
  }
  for (let array of arr){
    for (let n = 0; n<array.length;n++){
      for (let i of removable){
        if (array[n]===i){
          array.splice(n,1);
          n--;
        }
      }

    }
  }return arr;
}

console.log(sc([[3,3,3,3,3,3,3,3,3]]))
console.log(sc([[3,4,5]]))
console.log(sc([[3,4,4,5],[3,4,4,5],[3,4,4,5],[3,4,4,5]]))
console.log(sc([]))
console.log(sc([[]]))

// const myGirls=[];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const [name1st, ...theRest]=myBoys
// console.log(name1st)


// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren.join(''))
// console.log(myGirls)
// if(myGirls[0]==undefined){
//   console.log('gg undefined')
// }
// else console.log(' errors')
// const hello=new Set();
// console.log(typeof(hello))
