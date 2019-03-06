'use strict';

console.log('reading js');

var count = 0;
var button = document.querySelector('#button');

function myFunction() {
  console.log('clicked');
  if (count == 0) {
    document.body.style.backgroundImage = "url('images/comp-2.png')";
    count = 1;
  } else {
    document.body.style.backgroundImage = "url('images/comp-1.png')";
    count = 0;
  }
}
