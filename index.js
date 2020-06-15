const canvas=document.querySelector(".canvas"),
ctx=canvas.getContext("2d");
const moveBtn=document.querySelector(".js-moveBtn")

let objX=3,
objY=100;

const dx=.1,
dy=-.1;

function drawRightEyeBall(){
    ctx.beginPath();
    ctx.arc(objX+10, objY+5, 1, 0, 2 * Math.PI);
    ctx.fillStyle='black';
    ctx.fill();  
    ctx.closePath();
}
function drawLeftEyeBall(){
    ctx.beginPath();
ctx.arc(objX+15, objY+5, 1, 0, 2 * Math.PI);
ctx.fillStyle='black';
ctx.fill();
ctx.closePath();
}
function drawLeftEye(){
    ctx.beginPath();
ctx.arc(objX+15, objY+5, 3, 0, 2 * Math.PI);
ctx.fillStyle='white';
ctx.fill();
ctx.closePath();
}
function drawRightEye(){
ctx.beginPath();
ctx.arc(objX+10, objY+5, 3, 0, 2 * Math.PI);
ctx.fillStyle='white';
ctx.fill();
ctx.closePath();
}
function drawLeftLeg(){
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.fill()
    ctx.fillRect(objX+9,objY+20,3,10)
    ctx.closePath();
}

function drawRightLeg(){
    ctx.beginPath();
    ctx.rect(objX+3,objY+20,3,10)
    ctx.fillStyle="white";
    ctx.fillRect(objX+3,objY+20,3,10)
    ctx.closePath();
}

function drawObj(){
ctx.beginPath();
ctx.rect(objX,objY,20,20);
ctx.fillStyle="#ffc107";
ctx.fillRect(objX,objY,20,20)
ctx.closePath();

drawLeftLeg();
drawRightLeg();
drawLeftEye();
drawRightEye();
drawLeftEyeBall();
drawRightEyeBall();
}

function handleClick(event){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawObj()
    objX += dx;
    setInterval(handleClick, 100);
}

function init(){
    
    moveBtn.addEventListener("click", handleClick)
}
init()