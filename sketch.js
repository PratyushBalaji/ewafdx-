var r = mouseX;
var g = mouseY;
var b = mouseX;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  background(r, g, b);

  circle = new Pointer(0, 0, 20, 20);  
}
  

function draw(){
  background(r, g, b);
  if(mouseX > 255){
    r = 255;
    b = 60;
  } 
  if(mouseX < 255){
    r = mouseX;
    b = mouseX;
  }
  if(mouseY > 255){
    g = 150;
  }
  if(mouseY < 255){
    g = mouseY;
  }
  circle.display();
}