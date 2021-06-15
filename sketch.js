var robot;
var ground;
var alien;
function preload(){
  alienrunning=loadAnimation('alien7.gif')
}
function setup(){
  createCanvas(1200,600);
  robot=createSprite(50,70,80,80);
  ground=createSprite(600,590,1200,10);
  alien=createSprite(500,70,80,80);
 alien.addAnimation("running",alienrunning)
}

function draw(){
  background('black')
  drawSprites()
}