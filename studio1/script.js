'use strict';

console.log('reading js');

document.querySelector("#s").addEventListener('click', processForm, setup, draw);

function processForm(evt) {
  console.log('in processForm');
  var measurement = document.querySelector('#measurement').value;
  var liquid = document.querySelector('#liquid').value;
  var adjective = document.querySelector('#adjective').value;
  var verb1 = document.querySelector('#verb1').value;
  var color = document.querySelector('#color').value;
  var verb2 = document.querySelector('#verb2').value;
  var noun = document.querySelector('#noun').value;
  var tool = document.querySelector('#tool').value;
  var verb3 = document.querySelector('#verb3').value;
  var mySketch = document.querySelector('#mySketch');

  var myMsg = document.querySelector('#myMsg');
  myMsg.innerHTML = 'Start by mixing a ' + measurement + ' of ' + liquid + ' and equal parts water to create a wash for the background. Apply this wash to the canvas using ' + adjective + ' strokes. Next, take another brush, and ' + verb1 + ' it in some ' + color + ' paint. Apply this to the canvas as ' + verb2 + ' as you can. Add in ' + noun + ' with your ' + tool + '. Don’t forget; ' + verb3 + ' your painting with pride!';

  mySketch.className = 'show';
  evt.preventDefault();
}

function setup() {
  var myCanvas = createCanvas(320, 220);
  myCanvas.parent('mySketch');
  img = loadImage("images/canvas.png");
  background('#f2eadf');
}

function draw() {
  image(img, 0, 0);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 10, 10);
    fill(0);
    noStroke();
  }
}
