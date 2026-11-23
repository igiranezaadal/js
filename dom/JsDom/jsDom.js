document.addEventListener("DOMContentLoaded", function () {
  const msg = document.getElementById("welcomeMsg");
  if (msg) {
    msg.textContent = "Welcome!";
  }

  const lotsOfElements = document.querySelectorAll(".quizzing-quizzby");
  const animatedElement = lotsOfElements[2];
  if (animatedElement) {
    animatedElement.addEventListener("animationend", function () {
      const mainHeading = document.querySelector("h1");
      if (mainHeading) {
        mainHeading.style.backgroundColor = "purple";
      }
    });
  }

  // Function to generate a random hex color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to change the color of the box
  function changeBoxColor() {
    const colorBox = document.getElementById("colorBox");
    if (colorBox) {
      colorBox.style.backgroundColor = getRandomColor();
    }
  }

  // Select the button and add a click event listener on button click
  const changeColorButton = document.getElementById("changeColorButton");
  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeBoxColor);
  }

  const myDiv = document.getElementById("myDiv");
  if (myDiv) {
    myDiv.addEventListener("click", function () {
      this.style.backgroundColor = "grey";
    });
    myDiv.addEventListener("pointerover", function () {
      this.style.backgroundColor = "blue";
    });
    myDiv.addEventListener("pointerout", function () {
      this.style.backgroundColor = "hsl(240, 100%, 70%)";
    });
    myDiv.addEventListener("dblclick", function () {
      this.style.backgroundColor = "black";
    });
    myDiv.addEventListener("copy", function () {
      this.style.backgroundColor = "red";
    });
  }

  const parentElement = document.querySelector("#parent");
  if (parentElement) {
    const directSpanChildren = parentElement.querySelectorAll(":scope > span");
    directSpanChildren.forEach((item) => item.classList.add("red"));
  }

  const fruits = ["Banana", "Orange", "Mango"];
  const myList = document.getElementById("myList");
  if (myList) {
    const dFrag = document.createDocumentFragment();
    for (const fruit of fruits) {
      const li = document.createElement("li");
      li.textContent = fruit;
      dFrag.appendChild(li);
    }
    myList.appendChild(dFrag);
  }

  const myCustomDiv = document.createElement("div");
  for (let i = 1; i <= 20; i++) {
    const newElement = document.createElement("p");
    newElement.textContent = "This is paragraph number " + i;
    newElement.addEventListener("click", function respondToTheClick() {
      console.log("A paragraph was clicked: " + i);
    });
    myCustomDiv.appendChild(newElement);
  }
  document.body.appendChild(myCustomDiv);

  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.backgroundColor = "purple";
  }

  function addParagraph() {
    const para = document.createElement("p");
    para.textContent = "JavaScript is single threaded!";
    appendNewMessage();
    document.body.appendChild(para);
  }

  function appendMessage() {
    const messageEl = document.createElement("p");
    messageEl.textContent = "Welcome to the world of DOM";
    document.body.appendChild(messageEl);
  }

  function appendNewMessage() {
    const para = document.createElement("p");
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
  }

  addParagraph();
  appendMessage();
});