// const canvas=document.getElementById("canvas");
// const clearbtn=document.getElementById("clear");
// const ctx= canvas.getContext("2d");

// canvas.width = innerWidth * 0.7;
// canvas.height = innerHeight * 0.7;
// ctx.lineWidth = 2;
// ctx.lineCap ="round";

// canvas.onmousedown = ()=> ctx.beginPath();
// canvas.onmousemove =(e) => {
//     if(e.buttons !== 1) return;
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
// }

// clearbtn.onclick= ()=> ctx.clearRect(0 , 0, canvas.width, canvas.height);


// const canvas = document.getElementById("canvas");
// const clearbtn = document.getElementById("clear");
// const ctx = canvas.getContext("2d");

// function resizeCanvas() {
//   canvas.width = Math.floor(window.innerWidth * 0.7);
//   canvas.height = Math.floor(window.innerHeight * 0.7);
//   ctx.lineWidth = 2;
//   ctx.lineCap = "round";
//   ctx.font = "14px monospace";
// }

// resizeCanvas();
// window.addEventListener("resize", resizeCanvas);

// function getCanvasCoords(e) {
//   const scaleX = canvas.width / canvas.clientWidth;
//   const scaleY = canvas.height / canvas.clientHeight;
//   return {
//     x: Math.round(e.offsetX * scaleX),
//     y: Math.round(e.offsetY * scaleY),
//   };
// }

// canvas.onmousedown = (e) => {
//   if (e.button !== 0) return;
//   const { x, y } = getCanvasCoords(e);
//   ctx.beginPath();
//   ctx.moveTo(x, y);
// };

// canvas.onmousemove = (e) => {
//   if ((e.buttons & 1) !== 1) return;
//   const { x, y } = getCanvasCoords(e);

//   ctx.lineTo(x, y);
//   ctx.stroke();

//   // Write exact coordinates right at the mouse position
// //   ctx.fillText(`(${x}, ${y})`, x + 8, y - 8);
// };

// clearbtn.onclick = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// };



const canvas = document.getElementById("canvas");
const clearBtn = document.getElementById("clear");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.7;

ctx.lineWidth = 2;
ctx.lineCap = "round";

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});