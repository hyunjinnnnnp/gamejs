const canvas=document.querySelector(".canvas"),
ctx=canvas.getContext("2d");
const moveBtn=document.querySelector(".js-moveBtn")

let objX=3,
objY=100;

let dx=1,
dy=1;


const objSize= 20;

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
ctx.rect(objX,objY,objSize,objSize);
ctx.fillStyle="#ffc107";
ctx.fillRect(objX,objY,objSize,objSize)
ctx.closePath();
 if(objX + dx < 0  || objX+dx > canvas.width){
     dx=-dx;

 }
objX = objX + dx;
drawLeftLeg();
drawRightLeg();
drawLeftEye();
drawRightEye();
drawLeftEyeBall();
drawRightEyeBall();
}
function drawRain(){
    const randomX= Math.floor(Math.random() * canvas.width);
    const randomY= Math.floor(Math.random() * canvas.height);

    ctx.fillStyle="white"
    ctx.fillRect(randomX, randomY, 1, 5);

}
function handleClick(event){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawObj()
}

function init(){
    drawRain();
    moveBtn.addEventListener("click", handleClick);
    setInterval(handleClick, 1000);
    setInterval(drawRain, 10000);  
    // 오브젝 움직일때 스크린 잔상 다 지워지게 했기때문에 비는 출력이 안됨
}
init()