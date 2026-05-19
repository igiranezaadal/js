// const msg=document.getElementById(welcomeMsg)


// const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
// const element = lotsOfElements[2];

// element.addEventListener('animationend', function () {
//     const mainHeading = document.querySelector('h1');

//     mainHeading.style.backgroundColor = 'purple';
    
   // Function to generate a random hex color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// Function to change the color of the box
// function changeBoxColor() {
//     const colorBox = document.getElementById('colorBox');
//     colorBox.style.backgroundColor = getRandomColor();
// }

// // Select the button and add a click event listener
// const changeColorButton = document.getElementById('changeColorButton');
// changeColorButton.addEventListener('click', changeBoxColor);
// const element = document.getElementById("myDiv");

// // Add a click event listener
// element.addEventListener("click", function() {this.style.backgroundColor = "grey";});
// // element.addEventListener("click", function() {this.style.backgroundColor = "grey";});
// element.addEventListener("pointerover", function() {this.style.backgroundColor = "blue";});
// element.addEventListener("pointerout", function() {this.style.backgroundColor = "hsl(240, 100%, 70%)";});
// element.addEventListener("dblclick", function() {this.style.backgroundColor = "black";});
// element.addEventListener("copy",function(){this.style.backgroundColor = "red";});


// const parentElement = document.querySelector("#parent");
// let allChildren = parentElement.querySelectorAll(":scope > span");
// allChildren.forEach((item) => item.classList.add("red"));


// const fruits = ["Banana", "Orange", "Mango"];

// // Create a document fragment:
// const dFrag = document.createDocumentFragment();

// // Add li elements to the fragment:
// for (let x in fruits) {
//   const li = document.createElement('li');
//   li.textContent = fruits[x];
//   dFrag.appendChild(li);
// }

// // Add fragment to a list:
// document.getElementById('myList').appendChild(dFrag);

// const myCustomDiv = document.createElement('div');

// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     newElement.addEventListener('click', function respondToTheClick(evt) {
//         console.log('A paragraph was clicked.');
//     });

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);




// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('footer').style.backgroundColor = 'purple';});

function addPragraph(){
   const para= document.createElement('p');
   para.textContent="jaavaScript is single threaded language";
   document.body.appendChild(para);
}
function appendMessage(){
    const msg=document.createElement('p');
    msg.textContent="welcome to the world of DOM";
    document.body.appendChild(msg);
}
addPragraph();
// appendMessage();



// function addParagraph() {
//     const para = document.createElement('p');
//     para.textContent = 'JavaScript is single threaded!';

//     appendNewMessage();
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     const para = document.createElement('p');

//     para.textContent = "Isn't that cool?";
//     document.body.appendChild(para);
// }

// addParagraph();