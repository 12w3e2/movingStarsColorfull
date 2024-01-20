const canvas=document.getElementById("canvas");
const btn1=document.getElementById("btn1");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext("2d");

let stars=[]; //array
const Number_Stars=200;

//! Creating class using constructor function
function Star(x,y,speed,color,size){ //Star is class
    this.x=x; //x is parameter and property/Key
    this.y=y; //"this.y" is variable
    this.speed=speed;
    this.color=color;
    this.size=size;

}
//! Generating random numbers
function RandomInt(start,end){
    return (start+Math.floor(Math.random()*(end-start+1)))

}
console.log(RandomInt(10,20));
let userSpeed=0;
//! Initializing the star generation
function InitStars() {
    for(let i=0;i<Number_Stars;i++){
        let x=RandomInt(0,canvas.width);
        let y=RandomInt(0,canvas.height);
        let speed=RandomInt(10,50)+userSpeed;
        let color1=RandomInt(0,255);
        let color2=RandomInt(50,255);
        let color3=RandomInt(50,255);

        let size=RandomInt(1,5);
        color=`rgb(${color1},${color2},${color3})`;
        stars[i]=new Star(x,y,speed,color,size); //this is getting stored in an array.


    }
}


function drawStars(){

    for(let i=0;i<Number_Stars;i++){
        ctx.fillStyle=stars[i].color;
        ctx.beginPath();
        ctx.arc(stars[i].x,stars[i].y,stars[i].size,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
//    requestAnimationFrame(drawStars);
}

function moveStars(){
    for (let i=0;i<Number_Stars;i++){
        stars[i].x+=stars[i].speed;
        if(stars[i].x>=canvas.width){
            stars[i].x=-stars[i].size
        }
    }
}

function update(){
    //Erase Canvas
    ctx.fillStyle="#0C090A";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //Moving the stars
    moveStars();

    //DrawStars
    drawStars();

    //Infinite loop for smooth update
    requestAnimationFrame(update);

}

InitStars();

update();

function speed1(){
    userSpeed=500;
}








