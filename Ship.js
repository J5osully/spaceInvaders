//ship object constructor
function Ship(){
  this.size = 20;
  this.xPos = width/2;
  this.yPos = height - this.size * 3;
  
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