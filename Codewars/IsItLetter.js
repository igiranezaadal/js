//7kyu - Is it a letter?
function isItLetter(character) {
  let letter='qwertyuiopasdfghjklzxcvbnm';
  let upper = letter.toUpperCase();
  letter = letter.split('');
  if(letter.includes(character)||upper.includes(character)){
    return true;
  }else{
    return false;
  }
}
console.log(isItLetter('a'));
console.log(isItLetter('1'));