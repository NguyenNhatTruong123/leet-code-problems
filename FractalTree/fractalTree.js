let xA = []
let yA = []
let angle = Math.PI / 2
let length = 350

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function onLoadFunctions() {
    let x = 1000; y = 1000; level = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    let maxLev = document.getElementById("maxLev").value
    let rotateAngle = document.getElementById("angle").value * Math.PI / 180;
    drawContext(x, y,length, rotateAngle, level, xA, yA, maxLev, ctx)

    ctx.stroke();
}
window.onload = onLoadFunctions;

function changeMaxLev(value){
    let x = 1000; y = 1000; level = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    let maxLev = value;
    let rotateAngle = document.getElementById("angle").value * Math.PI / 180;
    drawContext(x, y,length, rotateAngle, level, xA, yA, maxLev, ctx)

    ctx.stroke();
}

function changeAngle(value){
    let x = 1000; y = 1000; level = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    let rotateAngle = value * Math.PI / 180
    let maxLev = document.getElementById("maxLev").value
    
    drawContext(x, y,length, rotateAngle, level, xA, yA, maxLev, ctx)

    ctx.stroke();
}

function drawContext(x, y,length, rotateAngle, level, xA, yA, maxLev, ctx){
    new_X = x + length * Math.cos(angle)
    new_Y = y - length * Math.sin(angle)
    ctx.moveTo(x, y)
    ctx.lineTo(new_X, new_Y)
    xA[level] = x
    yA[level] = y

    x = new_X
    y = new_Y

    level++
    length = length * 2/3
    angle += rotateAngle

    if(level <= maxLev){
        for(let i = 0; i< 10000; i++){}
        drawContext(x, y, length, rotateAngle, level, xA, yA, maxLev, ctx)
    }

    angle = angle - rotateAngle * 2

    if(level <= maxLev){
        for(let i = 0; i< 10000; i++){}
        drawContext(x, y, length, rotateAngle, level, xA, yA, maxLev, ctx)
    }

    length = length * 3/2
    angle += rotateAngle
    level--
    x = xA[level]
    y = yA[level]
}