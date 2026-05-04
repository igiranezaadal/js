// let greeting = "Hello, World!";
// let farewell = 'Goodbye!';
// let fullGreeting = greeting + ' ' + farewell;
// console.log(fullGreeting);

// let name= "Adal igiraneza ";
// let age=18;
// let place="kigali";
// console.log("\nhis name is " +name+", he is "+ age +" years old, and he lives in "+place)

// console.log("\nstring leng of place= "+place.length)
// console.log("string leng of name= "+name.length)

// console.log("\naccessing characters of the strinng: "+ name[1])
// console.log("accessing characters of the strinng: "+ place[0])

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log("\n "+char);
// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }



// function rowSumOddNumbers(n) {
// function rowSumOddNumbersTrianglePattern(n) {
//   let sum = 0;
//   let oddNumber = 1; // Start with the first odd number (1)
//   for (let i = 0; i < n; i++) {
//     sum += oddNumber; // Add the current odd number to the sum
//     oddNumber += 2; // Move to the next odd number
//   }
//   return sum;
// }
function pramidPattern(n) {
  let c=1;
  for (let i = 1; i <= n; i+=2) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row += '  '; // Add spaces for alignment
    }
    for (let j = 1; j <= i; j++) {
      
      row += '  '+c;
      c+=2;
    }
    console.log(row);
  }
}

pramidPattern(9);
