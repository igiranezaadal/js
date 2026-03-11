// let number=1;let numberD=1.002;let numberNeg=-1;
// let name = "Adal";
// let age = 18;
// let isStudent = true;

// console.log(name,number,numberD,numberNeg);
// console.log(age);
// console.log(isStudent);

// let c=5
// let f=(c*(5/9)+32)
// console.log("\nfahrenheight: "+f);

// let fah=5,cel=(fah-32)*5/9;
// console.log("celicius: "+ cel)

// let a=10
// let b=20
// if (a<b){
//     console.log('variable a:'+a+' is less than variable b:'+b)
// }
//     else {
//         console.log('variable a:'+a+' is greater than variable b:'+b);
//     }

// if(1){
// 	console.log("This statement will always execute because conditional is set to 1 i.e., true");
// }

// if(0){
//         console.log("This statement will NEVER execute because conditional is set to 0 i.e., false");
// }
// console.log(3!="3"); // not equal 
// console.log(3!=="3");// strict not equal
// console.log(true>=0);
// console.log(true>=0);

// var bill = 10.25 + 3.99 + 7.15;
// var tip = bill * (15 / 100);
// var total = bill + tip;
// console.log("total: "+total);

// var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";
// var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so "+ adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
// console.log (madLib);

// Hi, my name is James. I love baseball. In my spare time, I like to read.
// Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// let firstName="Julia";let interest="cats";let hobby="play video games";
// let awesomeMessage="hi, my name is "+ firstName +". I love "+ baseball +". In my spare time, I like to "+ hobby +"."
// console.log(awesomeMessage);


// Change the value of `room` and `suspect` to test your code
// A room can be either of - dining room, gallery, ballroom, or billiards room
// var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// var suspect = "Mr. Parkes";

// var weapon = "";  // Initial value

// A boolean variable `solved` will tell us the status of mystery
// true --> solved and false --> unsolved
// var solved = false;


// /*
// * To help solve this mystery, write a combination of conditional statements that:
// * 1. sets the value of weapon based on the room and
// * 2. sets the value of solved to true if the value of room matches the suspect's room
// */
// if (room === 'ballroom') {
//     weapon = 'poison';
//     // Mr. Kalehoff was present in the ballroom at the time of the murder
//     if(suspect==="Mr. Kalehoff") 
//         solved = true;
// }
// /* ANOTHER WAY OF CHECKING THE CONDITION
// if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
//     weapon = 'poison';
//     solved = true;
// }
// We suggest you to try this way of checking the condition as well for an unsolved mystery.
// */
// else if (room === 'gallery') {
//     weapon = 'trophy';
//     // Ms. Van Cleve was present in the gallery at the time of the murder
//     if(suspect==="Ms. Van Cleve") 
//         solved = true;
// }
// else if (room === 'billiards room') {
//     weapon = 'pool stick';
//     // Mrs. Sparr was present in the billiards room at the time of the murder
//     if(suspect==="Mrs. Sparr") 
//         solved = true;
// } 
// else if (room === 'dining room') {
//     weapon = 'knife';
//     // Mr. Parkes was present in the dining room at the time of the murder
//     if(suspect==="Mr. Parkes") 
//         solved = true;
// }   

// if (solved) {
//     console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
// }

// var weather = "rain";

// if (weather === "snow") {
// console.log("Bring a coat.");
// }else if (weather === "rain") {
// console.log("Bring a rain jacket.");
// }
// else{
// console.log("Wear what you have on.");
// }

// var number = 195;
// if (number % 2 ===  0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// var musicians = 4;

// // your code goes here
// if (musicians <= 0){
//     console.log("not a group");
// }
// else if (musicians == 1){
//     console.log("solo");
// }
// else if (musicians == 2){
//     console.log("duet");
// }
// else if (musicians == 3){
//     console.log("trio");
// }
// else if (musicians == 4){
//     console.log("quartet");
// }
// else if (musicians >= 4){
//     console.log("this is a large group");
// } else {
// console.log("invalid input");
// }


// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let digit of digits) {
//   console.log(digit);
// }
// const digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let digit of digits) {
//   console.log(digit);
// }
// for(let c=0;c<=1;c++){
//     console.log("\nLLLLLLLLL LLLLLLLLL LLLLLLLLL LLLLLLLLL LLLLLLLLL LLLLLLLLL \n");
//     for(let x=0;x<=1;x++)
//         console.log("ADAL ADAL ADAL ADAL ADAL ADAL ADAL ADAL ADAL ADAL ADAL ADAL ADAL ");
// }
// for (var x=0; x<5; x++) {
//   for (var y=0; y<3; y++) {
//     console.log(x + "," + y);
//   }
// }

// function laugh(){
// return "hahahahahahahahahaha!"
// }
// console.log(laugh());


// function add(x,y) {
//     return x+y
// }
// function divideBy2(num){
//     return num/2
// }
// var sum=add(5,7)
// var average=divideBy2(sum)
// console.log(sum)
// console.log(average)

let str = "I do what i what no shit";
let reversed = str.split('').reverse().join('');
console.log(reversed);

