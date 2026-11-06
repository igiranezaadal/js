// link
// https://www.codewars.com/kata/56f928b19982cc7a14000c9d/train/javascript

function sc(s) {
    // Good Luck
  return s.split('').filter(char => {
      let part = char === char.toUpperCase() 
        ?char.toLowerCase() : char.toUpperCase();
      return s.includes(part);
  }).join('');
}

console.log(sc("Aab")) // "Aa"
console.log(sc("AabBc")) // "AabB"
console.log(sc("AaaaAaab")) // "AaaaAaa"
console.log(sc("aAAAaAAb")) // "aAAAaAA"
