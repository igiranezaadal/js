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

// let str = "I do what i what no shit";
// let reversed = str.split('').reverse().join('');
// console.log(reversed);

// let user =window.prompt("good morning mr")
// console.log(user);


// Valid variable names
// let age=13;
// let _score="max";
// let $total=100;
// let thisIsCamelCase=null;
// console.log(age,_score,$total,thisIsCamelCase);
// // Invalid variable names

// let 1stPlace; // starts with a number its dont allo it alays



// let names=window.prompt("enter your name.");
// let age=window.prompt("enter your age.");
// let hobby= window.prompt("what is your hobby");
// console.log("my name is  "+names+ ", am "+ age + " years old and my hobby is "+ hobby+".");




// let fruits=["mango", "banana","apple"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits.reverse());
// }
// fruits.push("mandazi");
// fruits.splice(1,"monkey food");
// console.log(fruits);



// let fruits=["mango", "banana","apple"];
// console.log(fruits);
// fruits.push("mandazi");
// console.log(fruits);
// fruits.splice(1,1,"monkey food");
// console.log(fruits);
// console.log(fruits.splice(0, 2));
// var umbrella={
//     NumberOfRibs: 8,
//     isgay: true,
//     color: "pink",
//     jail: function() {
//         if (umbrella.isgay === true){
//             ("jail 67years")
//         }
//     }
// };

// var umbrella = {
//     color: "pink",
//     isOpen: false,
//     open: function() {
//       if (umbrella.isOpen === true) {
//         return "The umbrella is already opened!";
//         } else {
//         umbrella.isOpen = true;
//         return "Julia opens the umbrella!";
//         }
//     },
//     close: function() {
//       if (umbrella.isOpen === false) {
//         return "The umbrella is already closed!";
//         } else {
//         umbrella.isOpen = false;
//         return "Julia closes the umbrella!";
//         }
//     }
//   };
//   console.log(umbrella.open());
//   console.log(umbrella.open());
//   console.log(umbrella.close());
//   console.log(umbrella.close());


// for (let i = 0; i < 9; i++) {
//   if (i === 5) {
//     console.log("\n");
//     continue;
//   }
//   if (i === 8) {
//     break;
//   }
//   console.log("The value of i is: " + i);
// }
// console.log(67);



// const person = {
//   "name": "Adal",
//   "age": 18,
//   "1schild": "james",
//   "2schild": "julia",
//   "3schild": "michael"
// };
// const garage = {
//   "fireTrack":{
//     "color": "red",
//     "wheels": 6,
//     "operational": true
//   },
//   "race car":{
//     "color": "blue",
//     "wheels": 4,
//     "operational": false
//   }
// }

// console.log(person);
// console.log(person["1schild"]+"\n");
// delete person["1schild"];
// console.log(person["1schild"]);




// console.log(Array.from("foo"));
// // Expected output: Array ["f", "o", "o"]
// console.log(Array.of(1,1,34,"200 pump"));
// // Expected output: Array [1, 1, 34, "200 pump"]


// function findLargestNumber(numbers) {
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > largest) {
//         largest = numbers[i];
//       }
//     }
//     return largest;
//   }
//     console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8


// const grades = [85, 92, 78, 99, 88];

// const maxGrade = grades.reduce(function(highest, current) {
//   if (current > highest) {
//     return current;
//   } else {
//     return highest;
//   }
// }, grades[0]); // Starting with the first element as the initial "highest"

// console.log(maxGrade); // 99





  //Q2

//   function changeColor(newColor) {
//   const elem = document.getElementById("para");
//   const elem1 = document.getElementsByClassName("para");
//   // const elem = document.getElementById("para").getElementsByClassName("para");

//   elem.style.color = newColor;
// }

// document.querySelectorAll("button").forEach((button) => {
//   button.addEventListener("click", (event) => {
//     changeColor(event.target.textContent.toLowerCase());
//   });
// });


// function friend(friends){
//   return friends.filter(function(name){
//     return name.length === 4;
//   });
// };
// console.log(friend(["ryan","yous","mark","Michael"]));



// let a=function(name="adal"){ //default fuction

//  return name;
// }
// console.log(a());



// function returnuppercase(s){
//   let uper = [];
//   for(let i=0;i<s.length;i++){
//     if (s[i]===s[i].toUpperCase()){
//       uper.push(s[i]);
//     }
// }
// return uper.join("");
// }
// console.log(returnuppercase("AdaL"));




// //aDAL to uppercase then if Adal to uppercase
// function changeCaseAtPosition1(str) {
//   if(str[0]===str[0].toUpperCase()){
//     return str.toUpperCase();
//   }
//   // else if(str[0]===str[0].toLowerCase()){
//   else{
//     return str.toLowerCase();
//   }
// }
// console.log(changeCaseAtPosition1("Adal"));
// console.log(changeCaseAtPosition1("aDAL"));





// function filter_list(l) {
//   // Return a new array with the strings filtered out
// let array=[];
//   for(let i=0;i<l.length;i++){
//     if (typeof l[i] ==="number"){
//       array.push(l[i]); 
//     }
//   }
//   return array
// }
// console.log(filter_list([1,2,"a","b"]));



remove2ndElementFromArray = function() {
  arr.splice(2,5);// Remove the second element (index 1) from the array
  return arr;
};
var arr = ['I', 'am', 'a', 'developer'];
console.log(remove2ndElementFromArray(arr));



// function oddOrEven(array) {
//    if(array.length%2===0){
//     return "even";
//    }
//    else{
//     return "odd";
//    }
// }
// console.log(oddOrEven([0]));

// function oddOrEven(array) {
//   let sum = array.split().reduce((a, b) => a + b, 0);
//   if (sum % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
//   return sum;
// }
// console.log(oddOrEven("0"));

 



// map() method used to create a new array by applying a function to every element of an existing array.
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function(num) {
//   return num * 2;
// });
// console.log(doubled);
// // Output: [2, 4, 6, 8, 10]
// let test=[0,23,89,67]
// let max=test.reduce(function(highest,number){
//   if (number>highest){
//     return number;
//   } else {
//     return highest;
//   }
// },test[0]);
// console.log(max);
// function switchItUp(number){
// //Write your own Code!
//   switch(number){
//     case 0:      return "Zero";break;
//     case 1:
//       return "One";break;
//     case 2:
//       return "Two";break;
//     case 3:
//       return "Three";break;
//     case 4:
//       return "Four";break;
//     case 5:
//       return "Five";break;
//     case 6:
//       return "Six";break;
//     case 7:
//       return "Seven";break;
//     case 8:
//       return "Eight";break;
//     case 9:
//       return "Nine";break;
//   }
// }

// findUniqueNumbers = function(arr) {
//   let uniqueNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueNumbers.indexOf(arr[i]) === -1) {
//       uniqueNumbers.push(arr[i]);
//     }
//   }

//   return uniqueNumbers;
// }
// var arr = [1, 2, 3, 2, 4, 67,1,];
// console.log(findUniqueNumbers(arr));




// function findUniqueNumbers(arr) {
//   let uniqueNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueNumbers.indexOf(arr[i]) === -1) {//explanation: The indexOf() method is used to check if the current element arr[i] is already present in the uniqueNumbers array. If it returns -1, it means the element is not found in the uniqueNumbers array, indicating that it is unique.
//       uniqueNumbers.push(arr[i]);
//     }
//   }
//   return uniqueNumbers;
// }
// const arr = [1, 2, 3, 2,4,4, 4, 67, 1];
// console.log(findUniqueNumbers(arr));
