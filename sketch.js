/*
    -Create Ship
      x-Move with keyboard
      x-Don't move off screen
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
var myEnemies = [];

function setup() {
    createCanvas(600, 600);
    stroke(255);     // Set line drawing color to white
    frameRate(30);
    myShip = new Ship();
  myEnemies.push( new Enemy(width/2, 0 + 50));
  myEnemies.push( new Enemy(width/4, 0 + 50));
  myEnemies.push( new Enemy(width/6, 0 + 50));
  myEnemies.push( new Enemy(width/8, 0 + 50));
}

function draw() {
  background(0);
  


  keyInput();//evaluate keyboard control
  myShip.draw();
  for (let i = 0; i < myEnemies.length; i++ ){
    myEnemies[i].draw();
    //myEnemies[i].move(2);
  }

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