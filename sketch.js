var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite (200,200,20,20)
}

function draw() 
{
  background(30);
  
  if(keyDown("left"))
  {
ball.x = ball.x -5
background ("orange")
  }
 if(keyDown("right"))
 {
ball.x = ball.x +5
background("purple")
 }
if (keyDown("up"))
{
ball.y = ball.y -5
background("green")
}
if (keyDown("down"))
{
ball.y = ball.y +5
background("yellow")
}
  drawSprites ()
}





