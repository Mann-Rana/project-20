function preload(){
  bg=loadImage("images/iss.png")
  sleep=loadAnimation("images/sleep.png")
  brush=loadAnimation("images/brush.png")
  eat=loadAnimation("images/eat1.png","images/eat2.png")
  gym=loadAnimation("images/gym1.png","images/gym2.png")
  drink=loadAnimation("images/drink1.png","images/drink2.png")
  move=loadAnimation("images/move.png","images/move1.png")

}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();
  text("instructions:",20,30)
  text("up arrow=brushing:",20,55)
  text("down arrow=gym",20,70)
  text("left arrow=eating",20,85)
  text("right arrow=bathing",20,100)
  text("M=moving",20,115)
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.x = 150
    astronaut.velocityX=0.5
    astronaut.velocityY=0.5
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX=1
    astronaut.velocityY=1
  }





}