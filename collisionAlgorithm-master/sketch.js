var fixedRect, movingRect;

var gameObj1,gaemObj2,gameObj3;
var obj1,obj2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

   gameObj1 = createSprite(200,300,60,80)
   gameObj1.shapeColor = "brown"
   gameObj2 = createSprite(1000,300,60,80)
   gameObj2.shapeColor = "cyan"
   gameObj3 = createSprite(800,200,60,80)
   gameObj3.shapeColor = "magenta"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(touchingRectangle(movingRect,gameObj2)){

  movingRect.shapeColor = "red";
  gameObj2.shapeColor = "red";
  
}else  {
  movingRect.shapeColor = "green";
  gameObj2.shapeColor = "cyan";

}


  
  drawSprites();
}

function touchingRectangle(obj1,obj2){

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 +obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 +obj1.height/2) {
       return true;

}
else {
  return false;
  
}



}