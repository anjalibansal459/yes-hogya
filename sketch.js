var backgroundImage,ground,bg
var car,carImage,groundImage
var zombie,zombieImage
var fire,fireImage
var death=0
var zombieGroup,fireGroup
var coin,coinImage,coinGroup
var score=0
var laserno=5
var laser 
var axeImage
var laserGroup
function preload(){
backgroundImage=loadImage("bg.jpg")
carImage=loadImage("car.png")
groundImage=loadImage("ground.png")
coinImage=loadImage("coin.png")
zombieImage=loadImage("monster.png")
fireImage=loadImage("fire.png")
axeImage=loadImage("ax2.png")
}

function setup(){
createCanvas(1300,600)
zombieGroup=createGroup()
fireGroup=createGroup()
laserGroup=createGroup()
coinGroup=createGroup()
bg=createSprite(1000,300,20,20)
bg.addImage(backgroundImage)
bg.scale=2

ground=createSprite(600,580,1400,10)
ground.shapeColor="brown"
ground.visible=false
car=createSprite(550,510,50,50)
car.addImage(carImage)
car.scale=0.3
}
function spawnlaser(){
   
 
    if(laserno<=20){
        laser=createSprite(110,300,10,10);
        laser.x=car.x
        laser.y=car.y
      laser.addImage(axeImage);
      laser.scale=0.3;
      laser.velocityX=2;
      laserGroup.add(laser)
  laser.visible=false;
     return true;
       }
    else{
      return false;
    }
  }
function draw()
{
background(225)

bg.velocityX=-5
car.collide(ground)
if (bg.x < 0){
    bg.x = bg.width/2;
  }
  if(keyDown(UP_ARROW)){
      car.y=car.y-6
  }
  
  if(keyDown(DOWN_ARROW)){
    car.y=car.y+6
}
if(car.isTouching(zombieGroup)){
    death=death+1
    zombieGroup.destroyEach()
}
if(car.isTouching(fireGroup)){
    death=death+1
   
    fireGroup.destroyEach()
}
if(car.isTouching(coinGroup)){
    score=score+1
    coinGroup.destroyEach()
}
if(keyDown("l")&&laserno>0){
   
   laser.visible=true
 //  laserno=laserno-1
}
if(laserGroup.isTouching(zombieGroup)){
    zombieGroup.destroyEach()
    laserGroup.destroyEach()
}
if(laserGroup.isTouching(fireGroup)){
    fireGroup.destroyEach()
    laserGroup.destroyEach()
}

spawnZombie()
spawnFire()
spawnCoin()
spawnlaser()

drawSprites()
if(death==5){
    textSize(50)
fill("black")
text("Game Over!!!:(  ",400,400)
car.visible=false
zombieGroup.destroyEach()
fireGroup.destroyEach()
coinGroup.destroyEach()
bg.velocityX=0
}
textSize(50)
fill("black")
text("Death : "+death,200,200)

text("Score : "+score,800,200)
text("Press L To Shoot ",450,100)

}

function spawnZombie(){
    if(frameCount%40===0){
        zombie=createSprite(1290,random(50,350),20,20)
        zombie.addImage(zombieImage)
        zombie.scale=0.3
        zombie.velocityX=-8
       zombieGroup.add(zombie)
    }
}
function spawnFire(){
    if(frameCount%60===0){
        fire=createSprite(1290,random(400,600),20,20)
        fire.addImage(fireImage)
        fire.scale=0.4
        fire.velocityX=-8
        fireGroup.add(fire)
       
    }
}
function spawnCoin(){
    if(frameCount%120===0){
        coin=createSprite(1290,random(100,600),20,20)
        coin.addImage(coinImage)
        coin.scale=0.4
        coin.velocityX=-8
        coinGroup.add(coin)
       
    }
}
