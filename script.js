const canvas=document.getElementById("canvas1");
const body=document.getElementById("body");
const canvasWidth=canvas.width=640;
const canvasHeight=canvas.height=480;
const ctx=canvas.getContext("2d");

let size=20;
let x=320-size*0.5;
let y=240-size*0.5;
let speed=2;

//Changing X direction
function direction(details){
    console.log(details);
    if(details.code==="KeyD") speed=-speed;
    if(details.key==="+" && speed>=0) speed+=1;
    else if(details.key==="-" && speed>0) speed-=1;
    if(details.key==="+" && speed<=0) speed-=1;
    else if(details.key==="-" && speed<0) speed+=1;
    
}

body.addEventListener("keydown",direction);


function update() {
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    x=x+speed;
    // y=Math.random()*canvasHeight*0.95
    if(x>=canvasWidth) x=-5,y=Math.random()*canvasHeight*0.95;
    else if(x<-15) x=canvasWidth-5,y=Math.random()*canvasHeight*0.95;
    ctx.fillStyle="orange";
    ctx.fillRect(x,y,size,size);




    requestAnimationFrame(update);
    
}
update();




