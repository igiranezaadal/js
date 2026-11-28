const canvas=document.getElementById("canvas");
const clearbtn=document.getElementById("clear");
const ctx= canvas.getContext("2d");

canvas.width = innerWidth * 0.7;
canvas.height = innerHeight * 0.7;
ctx.lineWidth = 2;
ctx.lineCap ="round";

canvas.onmousedown = ()=> ctx.beginPath();
canvas.onmousemove =(e) => {
    if(e.buttons !== 1) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

clearbtn.onclick= ()=> ctx.clearRect(0 , 0, canvas.width, canvas.height);
