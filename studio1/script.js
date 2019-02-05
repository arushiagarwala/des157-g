'use strict';

console.log('reading js');

document.querySelector("#s").addEventListener('click', processForm, setup, draw);

function processForm(evt) {
  console.log('in processForm');
  var measurement = document.querySelector('#measurement').value;
  var liquid = document.querySelector('input[name="liquid"]:checked').value;
  var adjective = document.querySelector('#adjective').value;
  var verb1 = document.querySelector('#verb1').value;
  var colr = document.querySelector('#colr').value;
  var verb2 = document.querySelector('#verb2').value;
  var noun = document.querySelector('#noun').value;
  var tool = document.querySelector('input[name="tool"]:checked').value;
  var verb3 = document.querySelector('#verb3').value;
  var painting = document.querySelector('#finalProduct');

  var myMsg = document.querySelector('#myMsg');
  myMsg.innerHTML = 'Start by mixing a <strong>' + measurement + '</strong> of <strong>' + liquid + '</strong> and equal parts water to create a wash for the background. Apply this wash to the canvas using <strong>' + adjective + '</strong> strokes. Next, take another brush, and <strong>' + verb1 + '</strong> it in some <strong>' + colr + '</strong> paint. Apply this to the canvas as <strong>' + verb2 + '</strong> as you can. Add in <strong>' + noun + '</strong> with your <strong>' + tool + '</strong>. Don’t forget; <strong>' + verb3 + '</strong> your painting with pride!';

  painting.className = 'show';
  evt.preventDefault();
}

function setup() {
  var myCanvas = createCanvas(350, 250);
  myCanvas.parent('mySketch');
}

function draw() {
  var c = document.querySelector('#colr').value;
  var character = c.charAt(0);

  if (mouseIsPressed && mouseX >= 12 && mouseY >= 12 && mouseX <= 338 && mouseY <= 238) {
    /* code below is interpreted from a post on Processing Forum by username: Chrisir
       link to the post: 'https://forum.processing.org/two/discussion/17561/how-to-make-the-brush-stroke-change-based-on-the-speed-you-draw-a-line' */
    var speed = (abs(mouseX - pmouseX) + abs(mouseY - pmouseY)) * 1.4;
    strokeWeight(speed/3);
    line(mouseX, mouseY, pmouseX, pmouseY);
    /* end interpreted code */

    var opacity = ((abs(mouseX - pmouseX) + abs(mouseY - pmouseY))* 10) + 20;
    if (character == '#') {
      stroke(c);
    } else {
      stroke(0, opacity);
    }
  }
}
