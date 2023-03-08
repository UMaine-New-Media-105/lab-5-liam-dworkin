let speedX;
let x;
let directionX;

let speedY;
let y;
let directionY;

function setup() {
  createCanvas(400, 400);

  //variables defined for the sprite- including the travel path, speed, and direction

  speedX = 3;
  directionX = 1;
  x = random(width);

  speedY = 3;
  directionY = 1;
  y = random(height);
}

function draw() {
  background(220);

  x += speedX * directionX;
  y += speedY * directionY;
  drawSprite(x, y);

  //condition: speedX > width

  if (x + 25 >= width || x < 25) {
    // check if hits the right edge
    directionX *= -1;
  }

  //conditional - the same as width boundary but for height

  if (y + 25 >= height || y < 25) {
    // check if hits the right edge
    directionY *= -1;
  }

  // hidden because no need to read values when functioning
  // console.log("The value of directionX is : " + directionX)
  // console.log("The value of x is : " + x)
  // console.log("The value of y is " + y);
}

//simple sprite given to us by VJ for lab

function drawSprite(x, y) {
  push();
  translate(x, y);

  fill("red");
  ellipse(0, 0, 50);
  pop();
}

//hidden for now until part #2

//function keyPressed() {
//if (keyCode == LEFT_ARROW) {
//  speedX += 1;
// }
//}
