'use strict';

console.log('reading js');

var glasses = document.querySelector('#glasses');
var headphones = document.querySelector('#headphones');
var necklace = document.querySelector('#necklace');
var me = document.querySelector('#me');
var gOn = false, hOn = false, nOn = false;

glasses.addEventListener('mouseover', function() {
  glasses.src = 'images/glasses-hover.png';
});
glasses.addEventListener('mouseout', function() {
  glasses.src = 'images/glasses.png';
});
glasses.addEventListener('click', chooseGlasses);

headphones.addEventListener('mouseover', function()
{
  headphones.src = 'images/headphones-hover.png';
});
headphones.addEventListener('mouseout', function()
{
  headphones.src = 'images/headphones.png';
});
headphones.addEventListener('click', chooseHeadphones);

necklace.addEventListener('mouseover', function() {
  necklace.src = 'images/necklace-hover.png';
});
necklace.addEventListener('mouseout', function() {
  necklace.src = 'images/necklace.png';
});
necklace.addEventListener('click', chooseNecklace);

function chooseGlasses() {
  if (gOn == false) {
    gOn = true;
  } else {
    gOn = false;
  }
  wear(gOn, hOn, nOn);
}

function chooseHeadphones() {
  if (hOn == false) {
    hOn = true;
  } else {
    hOn = false;
  }
  wear(gOn, hOn, nOn);
}

function chooseNecklace() {
  if (nOn == false) {
    nOn = true;
  } else {
    nOn = false;
  }
  wear(gOn, hOn, nOn);
}

function wear(g, h, n) {
  console.log(g + h + n);
  if (g == true && h == false && n == false) {
    me.src = 'images/arushi-glasses.png';
  } else if (g == false && h == false && n == false) {
    me.src = 'images/arushi-bare.png';
  } else if (g == false && h == false && n == true) {
    me.src = 'images/arushi-necklace.png';
  } else if (g == true && h == false && n == true) {
    me.src = 'images/arushi-g&n.png';
  } else if (g == false && h == true && n == false) {
    me.src = 'images/arushi-headphones.png';
  } else if (g == false && h == true && n == true) {
    me.src = 'images/arushi-h&n.png';
  } else if (g == true && h == true && n == false) {
    me.src = 'images/arushi-g&h.png';
  } else if (g == true && h == true && n == true) {
    me.src = 'images/arushi-decorated.png';
  }
}
