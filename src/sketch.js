var PLAY=1;
var END=0;
var gameState=PLAY;

var bananaImage, bananaGroup;
var obstacleImage, obstacleGroup;
var monkey, monkeySprite;
var score; 

var ground, invisibleGround;

function preload() {
  monkeySprite = loadAnimation("monkey1.png", "monkey2.png", "monkey3.png", "monkey4.png", "monkey5.png", "monkey6.png", "monkey7.png", "monkey8.png", "monkey9.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("stone.png");
}

function setup() {
  createCanvas(650, 375);
  
  monkey = createSprite(20,310,50,50);
  monkey.addAnimation("monkeyRunning", monkeySprite);
  monkey.scale = 0.5;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
} 
 
function draw() {
  background(235);
  
  if(gameState===PLAY){
    
    if (keyIsDown("space")) {
      monkey.velocityY = -10;
    }
    
    
    
    monkey.velocityY = monkey.velocityY + 0.8;
    if(monkey.y > 310) {
      monkey.y = 310;
    }
    rock();
    fruits();
  
    if(monkey.isTouching(banana)) {
      monkey.scale = monkey.scale + 0.05;
      score = score+1;
    }
    
    if(monkey.isTouching(stone)) {
      monkey.scale = monkey.scale - 0.1;
      score = score+1;
    }
  
  }
  
  drawSprites();
  text("Score : "+ score,300,30);
}

function rock(){
  if(World.frameCount%200===0){
    var obstacle=createSprite(400,200,20,20);
    obstacle.setAnimation("Stone.png");
    obstacle.y=randomNumber(100,300);
    obstacle.velocityX=-7;
    obstacle.setLifetime=50;
    obstacle.scale = 0.2;
    
    obsracleGroup.add(obstacle);
  }
}

function fruits(){
  if(World.frameCount%80===0){
    var banana=createSprite(400,200,20,20);

    banana.scale=0.1;
    banana.setAnimation("Banana");
    banana.y=randomNumber(60,340);
   
    banana.velocityX=-5;
    banana.setLifetime=100;
    
    bananaGroup.add(banana);
  }
}
