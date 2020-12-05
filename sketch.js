function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 300, 50, 50);
  rect1.shapeColor="green";
  rect2=createSprite(400, 200, 50, 70);
  rect2.shapeColor="green";
  rect3=createSprite(400, 0, 20, 20);
  rect3.shapeColor="blue";
  rect3.velocityY=3;

}

function draw() {
  background("black"); 
  rect2.x=mouseX;
  rect2.y=mouseY; 
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2&&rect1.y-rect2.y<rect2.height/2+rect1.height/2&&rect2.y-rect1.y<rect2.height/2+rect1.height/2){
    rect1.shapeColor="red";
    rect2.shapeColor="red";
   }
   else{
     rect1.shapeColor="green";
    rect2.shapeColor="green";
   }
   if(rect1.x-rect3.x<rect1.width/2+rect3.width/2&&rect3.x-rect1.x<rect1.width/2+rect3.width/2){
     rect1.velocityX=rect1.velocityX*(-1);
     rect3.velocityX=rect3.velocityX*(-1);
   }
  if(rect1.y-rect3.y<rect3.height/2+rect1.height/2&&rect3.y-rect1.y<rect3.height/2+rect1.height/2){
    rect1.velocityY=rect1.velocityY*(-1);
    rect3.velocityY=rect3.velocityY*(-1);
  }
  drawSprites();
}