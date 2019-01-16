console.log('reading js');

/*function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
}*/

var scale;
var x = 0;
var speed1 = 1, speed2 = 1, speed3 = 1;

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
}

function draw() {
  background('#8fd3f9');

  push();
  scale = 1;
  translate(145, 120);
  makePost();
  rotate(radians(frameCount * speed1));
  if (mouseX <= 300) {
    if (mouseIsPressed) {
      speed1 = random(6) + 1;
    }
  }
  makeWind();
  pop();

  push();
  scale = 1;
  translate(400, 120);
  makePost();
  rotate(radians(frameCount * speed2));
  if (mouseX > 300 && mouseX <= 540) {
    if (mouseIsPressed) {
      speed2 = random(6) + 1;
    }
  }
  makeWind();
  pop();

  push();
  scale = 1;
  translate(655, 120);
  makePost();
  rotate(radians(frameCount * speed3));
  if (mouseX > 540) {
    if (mouseIsPressed) {
      speed3 = random(6) + 1;
    }
  }
  makeWind();
  pop();
}

function makeWind() {
  stroke(100);
  strokeWeight(0.5);
  fill(255);
  beginShape();
  vertex(-12 / scale,6 / scale);
  vertex(0 / scale,94 / scale);
  vertex(12 / scale,6 / scale);
  vertex(80 / scale,-54 / scale);
  vertex(0 / scale,-14 / scale);
  vertex(-80 / scale,-54 / scale);
  vertex(-12 / scale,6 / scale);
  endShape();
}

function makePost() {
  stroke('#422801');
  strokeWeight(1);
  fill('#A0522D');
  rect(-3, -3, 6, 200);
}
