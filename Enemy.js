//Enemy object constructor
function Enemy(xPos,yPos){
  this.size = 20;
  this.xPos = xPos;
  this.yPos = yPos;
  
  this.draw = function(){
    push();
    noStroke();
    fill(10,250,200);//triangle 1 color is teal
     
    triangle(this.xPos + this.size, this.yPos - this.size, 
        this.xPos - this.size, this.yPos - this.size, 
        this.xPos - 0, this.yPos + this.size);
    
    fill(0,100,200);//triangle 2 color is blue
    
    triangle(this.xPos - this.size/2, this.yPos + this.size/2, 
        this.xPos + this.size/2, this.yPos + this.size/2, 
        this.xPos + 0, this.yPos - this.size/2);
   
    pop();
  }

  this.move = function(xStep, yStep){
    if (this.xPos + xStep <= 0 + this.size) {
      this.xPos = 0 + this.size;
    } else if (this.xPos + xStep >= width - this.size) {
      this.xPos = width - this.size;
    } else {
       this.xPos = this.xPos + xStep; 
    }
    
    this.yPos = this.yPos + yStep;

  }
} // Enemy constructor