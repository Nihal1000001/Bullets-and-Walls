var thickness,wall;
var bullet,bulletImg,speed,weight;

function preload(){
  bulletImg=loadImage("bullet.png");
}

function setup() {
  createCanvas(1600,400);
  speed=random(100,200);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  bullet.addImage("bullet",bulletImg);
  bullet.shapeColor="white";
 // bullet.scale=0.1;
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
   textSize(25);
   fill("White");
   text("Speed of the Bullet:"+ speed,1120,20);
   text("Weight of the Bullet:"+ weight,1120,50);
 if(Collision(bullet,wall)){
  bullet.velocityX=0;
  var damage= 0.5 *   weight * speed * speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
  
}

function Collision(bullet,wall){
 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true
 }
 return false;
}