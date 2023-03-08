# lab-5-liam-dworkin
lab-5-liam-dworkin created by GitHub Classroom
In lab #5 we are working on two projects. The first being a simple string of code that calls back a function for a red ball sprite. The sprite is then given boundary 
boxes along the X and Y axis by defining at which width and height it will no longer be allowed to continue traveling forwards. 

These variables define X constrictions:
  speedX = 3;
  directionX = 1;
  x = random(width);
  
These variables define Y constrictions:
  speedY = 3;
  directionY = 1;
  y = random(height);
  
  Link to part #1 and #2:
  https://editor.p5js.org/liamdworkin/sketches/wNzvNcFPF
  
  (the sketch is the same for both sets of code and has been updated as such. Though the original part #1 code is available separate 
  from part #2 as two separate files in my personal lab 5 repository.) 
  
  Part #2 includes my own sprite function for yeetBall the little bouncing yeetball. Other than that addition and a function added in for keyCodes for the arrow keys
  the code is almost entirely the same. Because of the new sprite function it looks cuter and can be slightly moved around with the arrow keys. It's a ridiculously
  fun game experiment. 
  
  Example of keyCode/keyPressed

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    speedX *= -1;
  }
  
  I won't paste my sprite function because it's huge and actually pretty simple. 
