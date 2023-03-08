let speedX;
let x;
let directionX;

let speedY;
let y;
let directionY;

function setup() {
  createCanvas(400, 400);

  //variables defined for the sprite- including the travel path, speed, and direction
  //same variables and code for the 2nd part of lab 5- however I've added in my own sprite function and also added mouse based control to the sprite itself.

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
  yeetBall(x, y, 0.8);

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

  //my sprite from my project 3 game. I still plan on beefing it up for the game but for lab it works perfectly for this exercise.

function yeetBall(x, y, size) {
  if (mouseIsPressed) {
    push();
    translate(x, y);
    scale(size);
    noStroke();
    translate(0, 0);
    fill("hsla(50, 45%, 75%, .7)");
    ellipse(0, 0, 101, 75);
    fill("hsla(100, 45%, 75%, .7)");
    ellipse(0, 0, 95, 67);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 75, 47);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 57, 39);
    fill("purple");
    textSize(25);
    noStroke();
    text("_ >o< _", -41, 2);
    fill("salmon");
    textSize(20);
    text("◍    ◍", -27, 6);
    pop();
  } else {
    push();
    translate(x, y);
    scale(size);
    noStroke();
    translate(0, 0);
    fill("hsla(50, 45%, 75%, .7)");
    ellipse(0, 0, 91, 96);
    fill("hsla(100, 45%, 75%, .7)");
    ellipse(0, 0, 80, 85);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 63, 64);
    fill("hsla(230, 45%, 75%, .7)");
    ellipse(0, 0, 45, 47);
    fill("purple");
    textSize(25);
    noStroke();
    text("( ^-^ )", -31, -4);
    fill("salmon");
    textSize(20);
    text("◍   ◍", -25, 0);
    pop();
  }
}
  //hidden for now until part #2
  //no longer hidden- multipliers for reversing direction (-1 * -1 = 1 - i.e. change in direction and vice versa for 1 and -1. I get what you meant VJ my brain is just slow at math now. There's a reason I'm NMD and not comp sci.)
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    speedX *= -1;
  }

  if (keyCode == RIGHT_ARROW) {
    speedX *= -1;
  }

  if (keyCode == UP_ARROW) {
    speedY *= -1;
  }

  if (keyCode == DOWN_ARROW) {
    speedY *= -1;
  }
}
