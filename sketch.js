var bg,sleep,brush,gym,eat,drink,bath,move,astronaut;

function preload() {
  bg=loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym21.png","gym22");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move1.png","move.png")
}
function setup() {
  createCanvas(600,500);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1

}

function draw() {
  background(bg);  
  drawSprites();
  
  textSize(20);
  fill("white");
  text("instructions:",20,35);
  textSize(15);
  text("up arrow=brushing",20,55);
  text("down arrow=gyming",20,70);
  text("left arrow=eating",20,85);
  text("right arrow=bathing",20,100);
  text("m key= moving",20,115);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  if(keyDown("DOWN_ARROW"))  {
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("UP_ARROW"))  {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("LEFT_ARROW"))  {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350
    astronaut.x=150
    astronaut.velocityX=0.5
    astronaut.velocityY=0.5
  }
  if(keyDown("RIGHT_ARROW"))  {
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.x=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("m"))  {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=1
    astronaut.velocityY=1
}
}