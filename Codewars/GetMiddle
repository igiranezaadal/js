function getMiddle(s) {
  if(s.length%2!==0){
    let position=Math.floor(s.length/2);
    return s.at(position);
  }
  else if(s.length%2==0){
    let position=Math.floor(s.length/2);
    return s.slice(position-1, position+1);
  }
}
    // position=Math.floor(s.lenght);
    //  let result = [];
    //  result.push(s.at(position))
    // position++
    //  result.push(s.at(position))
    // return result
// s=s.split('')
console.log(getMiddle("test")) // => "es"
console.log(getMiddle("testing")) // => "t"
console.log(getMiddle("middle")) // => "dd"
console.log(getMiddle("A")) // => "A"