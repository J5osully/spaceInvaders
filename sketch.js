/*
    -Create Ship
      x-Move with keyboard
      x-Don't move off screen
      x-Create ship art
    -Create enemies
      x-Create an object for enemies
      x-Create art for enemies
      x-Create array for enemy objects
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
var myEnemies = [];
var myBullets = [];

function setup() {
    createCanvas(600, 600);
    // createCanvas(windowWidth, windowHeight);
    stroke(255);     // Set line drawing color to white
    frameRate(30);
    myShip = new Ship();
  
    createEnemies(myEnemies);
    createBullet(myBullets, 100, 500);
  
}

function draw() {
  background(0);
  


  keyInput();//evaluate keyboard control
  myShip.draw();
  for (let i = 0; i < myEnemies.length; i++ ){
    myEnemies[i].draw();
    //myEnemies[i].move(2,10);
  }
  moveBullets(myBullets, -5)
  drawBullets(myBullets);

  // Point in center of screen
  strokeWeight(2);
  stroke(0,255,0);
  point(width/2,height/2); // point in screen center
}





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

function createEnemies(enemyArray){
  var numRows = 5;
  var numColums = 10;
  var yTop = 50;
  var yBottom = height * 2/3;
  var xLeft = 50;
  var xRight = width;
  var xSpacing = (xRight - xLeft)/numColums;
  var ySpacing = (yBottom - yTop)/numRows;
  
  for (let j = 0; j < numRows; j++){
  for (let i = 0; i < numColums; i++){
    enemyArray.push( new Enemy(xLeft + xSpacing*i, yTop + ySpacing*j));
  }
}
}

function createBullet(bulletArray, xPos, yPos){
  bulletArray.push([xPos, yPos]);
}

function drawBullets(bulletArray){
  for (let i = 0; i < bulletArray.length; i++){
    //bulletArray[i][0] is xPos and bulletArray[i][1] is yPos
    strokeWeight(5);
    stroke(255,0,0);
    point(bulletArray[i][0], bulletArray[i][1]); // point in screen center
      
  }
}

function moveBullets(bulletArray, yStep){
  for (let i = 0; i < bulletArray.length; i++){
    //bulletArray[i][0] is xPos and bulletArray[i][1] is yPos
    bulletArray[i][1] = bulletArray[i][1] + yStep;
  }
}