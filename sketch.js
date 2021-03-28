var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, groundImage


function preload(){
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(600, 400);
  // creating monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocity.x = -4;
  ground.x = ground.width/2;

}


function draw() {
  background(255);
  
  if(ground.x<0){
  ground.x = ground.width/2;  
  }
  
  if(keyDown("space") ){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);

  spawnFood = new Group();
  spawnObstacles = new Group();
  
  //Survival time
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
  
  drawSprites();
}

function spawnfood(){
  // spawn the bananas
  if (frameCount % 80 === 0) {
  banana = createSprite(350,400, 10, 10);
  banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage);
  banana.velocityX = -3;
    
  //assign lifetime to the variable
  banana.lifetime(200);

    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananasGroup.add(banana);
  }
}

function spawnObstacles(){
  // Spawn the stones
    if (frameCount % 300 === 0){
   obstacle = createSprite(350, 400, 10, 10);
   obstcale.y = Math.round(random(120, 200));
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3
      
  // Lifetime of Stone
      obstacle.lifetime(200)
      
   // Add stone to the group
      obstaclesGroup.add(obstacle);
}
}