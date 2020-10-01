var fixedRectangle;

var movingRectangle;


function setup() {
  createCanvas(1200,800);
  fixedRectangle= createSprite(600, 400, 50, 50);
  movingRectangle = createSprite(400,200,80,30);
  fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRectangle.x = World.mouseX
  movingRectangle.y = World.mouseY
  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.y-movingRectangle.y<movingRectangle.width/2+fixedRectangle.width/2
    ){
    fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="white";
  }
  else{
    fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="blue";
  }
  drawSprites();
}