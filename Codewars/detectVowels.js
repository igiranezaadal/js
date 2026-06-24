function isPangram(string){
//   const letters = string.toLowerCase().replace(/[^a-z]/g, '');
//   const uniqueLetters = new Set(letters);
//     return uniqueLetters.size === 26;
  
//   const lower = string.toLowerCase();
//     const alph= 'abcdefghijklmnopqrstuvwxyz';
//     check= alph.split('').every(letter => lower.includes(letter));
//   return check
  
  const lower = string.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        const now = alphabet[i];
        
        if (!lower.includes(now)) {
            return false;
        }
    }
  return true;
}

console.log(isPangram("abcdefghijklmnopqrstuvwxy ."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
