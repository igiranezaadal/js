// function last(first, ...rest) {
//   if (rest.length) return rest.pop();
//   if (first.length) return [...first].pop();
//   return first;
// }
function last(...data) {
  if(data.length>1){
    return data.at(-1);
  }
  const single = data[0];
//   if (data.length==1 ) {
  if (single != null && typeof(single.at) === 'function') {
    return single.at(-1);
  }
  return single
}
console.log(last(5))                 // =>  5
console.log(last([1, 2, 3, 4]))      // =>  4
console.log(last("xyz"))             // => "z"
console.log(last(1, 2, 3, 4))        // =>  4
console.log(last([1, 2], [3, 4]))    // =>  [3, 4]
console.log(last([[1, 2], [3, 4]]))  // =>  [3, 4]

