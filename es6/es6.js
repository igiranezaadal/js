/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

// const cheetah = {
//     name: 'Cheetah',
//     scientificName: 'Acinonyx jubatus',
//     lifespan: '10-12 years',
//     speed: '68-75 mph',
//     diet: 'carnivore',
//     summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
//     fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
// };

// // creates an animal trading card
// function createAnimalTradingCardHTML(animal) {
//     const cardHTML = '<div class="card">
//         <h3 class="name">${animal.name}</h3>
//         <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
//         <div class="description">
//             <p class="fact">${animal.fact}</p>
//             <ul class="details">
//                 <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
//                 <li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
//                 <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
//                 <li><span class="bold">Diet</span>: ${animal.diet} </li>
//             </ul>
//             <p class="brief">${animal.summary}</p>
//         </div>
//     </div>';

//     return cardHTML;
// }

// console.log(createAnimalTradingCardHTML(cheetah));

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

// const cheetah = {
//     name: 'Cheetah',
//     scientificName: 'Acinonyx jubatus',
//     lifespan: '10-12 years',
//     speed: '68-75 mph',
//     diet: 'carnivore',
//     summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
//     fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
// };

// // creates an animal trading card
// function createAnimalTradingCardHTML(animal) {
//     const cardHTML = '<div class="card">
//         <h3 class="name">${animal.name}</h3>
//         <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
//         <div class="description">
//             <p class="fact">${animal.fact}</p>
//             <ul class="details">
//                 <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
//                 <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
//                 <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
//                 <li><span class="bold">Diet</span>: ${animal.diet}</li>
//             </ul>
//             <p class="brief">${animal.summary}</p>
//         </div>
//     </div>';

//     return cardHTML;
// }

// console.log(createAnimalTradingCardHTML(cheetah));




// function diamond(n){
// for
// //   if(n%2===0 || n<1 || n===0)
// //   return 'null';
// for(let i=0; i<n; i++){
//   console.log('*');
//       if (n==1){
//       }
// }
// }


// function rentalCarCost(d) {
//   // Your solution here
//   let total=d*40;
//   if(d>=7){
//     total-=50;
//   }else if(d>=3){
//     total-=20;
//   }
//   return `$${total}`;
// }
// console.log(rentalCarCost(3));


// const greet = name => `Hello ${name}!`;/** Programming Quiz: Convert Function into an Arrow Function (2-1)*/

// convert to an arrow function
// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
// 	return square * square;
// });
// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square=>{
// 	return square * square;
// });
// console.log(...squares);


// function points(games) {
// const str="3:1";
//   // for(i=0;i<games.length;i++){
//     const [num1,num2]=str.split(':').map(number);

//   // }
//   return 0
// }
// points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])


// function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
//   return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
// }gpro
// houseDescriptor({  houseColor: 'red', shutterColors: ['white', 'gray','pink']});
// houseDescriptor({houseColor: 'red'});
// houseDescriptor({shutterColors: ['orange','blue']});
// houseDescriptor({});



// class Desert{
//   constructor(calories=250){
//     this.calories=calories;
//   }
// }
// class IceCream extends Desert{
//   constructor(flavor, calories,toppings=[]){
//     super(calories)
//     this.flavor=flavor;
//     this.toppings=toppings;
//   }

//   addTopping(toppings) {
//     this.toppings.push(toppings);
//   }
// }


// function Plane(){
//   this.numEngines=numEngines;
//   this.enginesActive=false;
// }
// Plane.prototype.startEngines=function(){
//   console.log('starting engines...');
//   this.enginesActive=true;
// }
// var RichardPlane=new Plane(1);
// RichardPlane.startEngines();

// var jamesPlane=new Plane(4);
// RichardPlane.startEngines();

// const shane= createContact('shane',23,'hazel');
// document.write('<br> age: 😁'+shane.age);
// function createContact(name,age,eyeColor){
//   return{name,age,eyeColor}
// }


// class Product{
//   constructor(name,price){
//     this.name=name;
//     this.price=price;
//   }
//   displayProduct(){
//     console.log(`name: ${this.name}`);
//     console.log(`price: ${this.price.toFixed(2)}`);
//   }
// }
// const Product1=new Product("adal",676767)
// Product1.displayProduct();

// const Product2=new Product("ui",0.67)
// Product1.displayProduct();

// const Product3=new Product("676",676.767)
// Product1.displayProduct();



      // const cars = ["BMW", "Volvo", "Saab", "Ford"];
      //   let len = cars.length;

      //   let i = 0;

      //   let text = "";
      //   for (; i < len; ) {
      //   text += cars[i] + "<br>";
      //   i++;
      //   }
      //   document.getElementById("demo").innerHTML = text;


// class Person{
//   constructor(name){this.name=name;}
//    Walk(){console.log("alk")}
// }
// const Person=new Person ('mosh');


// class car {
//   constructor (name,year){
//     this.name=name;
//     this.year=year;
//   }
//   age(){
//     const date=new Date();
//     return date.getFullYear()- this.year;
//   }
// }
// const myCar = new Car("Ford",2014);
// document.getElementById("demo").innerHTML="My ca is ${myCar.age()} years old.";


// const iter={
//   counter:0,
//   next(){
//     return{
//       value:this.counter++,
//       done:this.counter>=10,
//     }
//   }
// }
// let next =iter.next();
// while(!next.done){
//   console.log(next.value);
//   next= iter.next();
// }

// class Parent{
//   constructor (name,title){
//     this.name=name;
//     this.title=title;
//   }
//   someBodyParent(){
//     return "this is a Parent method!";
//   }
// }
// class Child extends Parent{
//   constructor(name,title,thirdProp){
//     super(name,title);
//     this.thirdProp=thirdProp
//   }
//   someChildMethod(){
//     return "this is a Chil method!";
//   } 
// }

// const obj=new Parent("parent","this is the parent title");
// console.log(obj);
// console.log(obj.someBodyParent());

// const obj0=new Child("child", "this is child calling", true)
// console.log(obj0);
// console.log(obj.someBodyParent())


// const games=new Set(['Super Mario Bros.','Banjo-Kazooie','Mario Kart','Super Mario Bros.']);
// console.log(games);

// games.add('Banjo-Tooie');
// games.add('Age of Empires');
// games.delete('Super Mario Bros.');
// console.log(games);
// console.log(games.size + "\n");//sho size, numbers of element
// console.log(games.values());//retrive all values
// console.log(games.has("Mario Kart")) //Checking If An Item Exists



// const mySet = new Set(['a', 'b', 'c']);
// const valuesIterator = mySet.values();       // Set Iterator of values
// const entriesIterator = mySet.entries();     // Set Iterator of [value, value] pairs
// const defaultIterator = mySet[Symbol.iterator](); // Default iterator


// const games=new Set(['Super Mario Bros.','Banjo-Kazooie','Mario Kart','Super Mario Bros.']);
// const itelato=games.values();

// itelato.next();
// itelato.next();
// itelato.next();
// itelato.next();

const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}

// console.log("Start small. Ship something.");
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({},3);
mySet.add("prime adal")

const setIter = mySet[Symbol.iterator]();

// console.log(setIter.next().value); // "0"
// console.log(setIter.next().value); // 1
// console.log(setIter.next().value); // {}
// console.log(setIter.next().value)
for(const i of setIter){
console.log(i)
}

