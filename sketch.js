var bullet, wall, speed, weight, thickness

function setup() {
  createCanvas(1600, 400);
  createSprite(400, 200, 50, 50);
  thickness = random(22, 83);
  weight = random(30, 52);
  speed = random(223, 321);
  bullet = createSprite(50, height / 2, 50, 25)
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
  bullet.velocityX = speed;


}

function draw() {
  background(0, 0, 0);
  drawSprites();
  detectCollision(bullet, wall);

}

function detectCollision(o1, o2) {

  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
  console.log(damage)

  if (isTouching(o1,o2) && damage < 10) {

    o1.shapeColor = "Green";
     o1.velocityX = 0;
  }

  else if (isTouching(o1,o2) && damage > 10) {

    o1.shapeColor = "red"
    o1.velocityX = 0;



  }



}

function isTouching (object1,object2){

  if (object1.x-object2.x<=object1.width/2+object2.width/2 &&
    object2.x-object1.x<=object1.width/2+object2.width/2 &&
    object2.y-object1.y<=object1.height/2+object2.height/2 &&
    object1.y-object2.y<= object1.height/2+object2.height/2
    ){
  
    return true;
  
  } else {
    return false;
  
  }}