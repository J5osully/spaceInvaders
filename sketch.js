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
  point(width/2,height/2)
}



//ship object constructor
function Ship(){
  this.xSize = 30;
  this.ySize = 30;
  this.xPos = width/2;
  this.yPos = height/1.02;
  
  this.draw = function(){
    push();
    noStroke();
    fill(100,0,100);
    rectMode(CENTER);
   triangle(300, 595, 320, 595, 310, 575);
    pop();
  }

  this.move = function(xStep){
    this.xPos = xStep + this.xPos;

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