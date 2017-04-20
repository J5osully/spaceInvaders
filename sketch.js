/*
    -Create Ship
      x-Move with keyboard
      -Don't move off screen
      x-Create ship art
    -Create enemies
      -Create an object for enemies
      -Create art for enemies
      -Create array for enemy objects
      -Add motion to enemies
      -Enable shooting from enemies
    -Create gun/ shooting mechanic
      -Shoot with spacebar
      -Create array to hold all bullets on screen.
      -Delete bullets from array when they go off screen.
      -Detect collisions between bullets and enemies.
    -General
      -create game hud
      -display lives
      -Score
      -display when dead




*/
var myShip;


function setup() {
    createCanvas(600, 600);
    stroke(255);     // Set line drawing color to white
    frameRate(30);
    myShip = new Ship();
}

function draw() {
  background(0);
  


  keyInput();//evaluate keyboard control
  myShip.draw();

  strokeWeight(2);
  stroke(0,255,0);
  point(width/2,height/2); // point in screen center
}



//ship object constructor
function Ship(){
  this.size = 20;
  this.xPos = width/2;
  this.yPos = height/2;//1.02;
  
  this.draw = function(){
    push();
    noStroke();
    fill(10,250,200);//rectangle color is teal
    rectMode(CENTER);
    rect(this.xPos, this.yPos, this.size, this.size);
    fill(100,0,100);//triangle color is purple
    triangle(this.xPos - this.size, this.yPos + this.size, 
        this.xPos + this.size, this.yPos + this.size, 
        this.xPos + 0, this.yPos - this.size);
   
    pop();
  }

  this.move = function(xStep){
    if (this.xPos + xStep <= 0 + this.size) {
      this.xPos = 0 + this.size;
    } else if (this.xPos + xStep >= width - this.size) {
      this.xPos = width - this.size;
    } else {
       this.xPos =  this.xPos + xStep;
    }
   

  }
} // Ship constructor

function keyInput(){
    if (keyIsPressed === true) {
    
      // Ship control
      if (keyCode == LEFT_ARROW){
        myShip.move(-10);
      } else if (keyCode == RIGHT_ARROW){
        myShip.move(10);
      }
      
      // Shooting
      if (keyCode == 32){//spacebar
        
      }
   }
}