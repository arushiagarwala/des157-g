'use strict';

console.log('reading js');

var wheat = document.querySelector('#wheat-bread');
var white = document.querySelector('#white-bread');
var beef = document.querySelector('#beef');
var chicken = document.querySelector('#chicken');
var coldCut = document.querySelector('#cold-cut');
var salami = document.querySelector('#salami');
var kale = document.querySelector('#kale');
var spinach = document.querySelector('#spinach');
var tomato = document.querySelector('#tomato');
var cheddar = document.querySelector('#cheddar');
var swiss = document.querySelector('#swiss');
var almond = document.querySelector('#almond');
var orange = document.querySelector('#orange');
var drink = document.querySelector('#drink');

var s0 = document.querySelector('#s0');
var s1 = document.querySelector('#s1');
var s2 = document.querySelector('#s2');
var s3 = document.querySelector('#s3');
var s4 = document.querySelector('#s4');
var s5 = document.querySelector('#s5');
var s6 = document.querySelector('#s6');
var s7 = document.querySelector('#s7');
var s8 = document.querySelector('#s8');
var s9 = document.querySelector('#s9');
var slices = [];
var zindex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var backgroundColors = [];
var borderColors = [];

changeState(wheat);
changeState(white);
changeState(beef);
changeState(chicken);
changeState(coldCut);
changeState(salami);
changeState(kale);
changeState(spinach);
changeState(tomato);
changeState(cheddar);
changeState(almond);
changeState(orange);

function changeState(ingredient) {
  ingredient.addEventListener('mouseover', function() {
    if (ingredient.style.backgroundColor == 'rgb(33, 150, 243)') {
    } else {
      ingredient.style.backgroundColor = '#d3d3d3';
    }
  });

  ingredient.addEventListener('mouseout', function() {
    if (ingredient.style.backgroundColor == 'rgb(33, 150, 243)') {
    } else {
      ingredient.style.backgroundColor = '#fff';
    }
  });

  ingredient.addEventListener('click', function() {
    var bodyID = ingredient.id;
    if (ingredient.style.backgroundColor == 'rgb(33, 150, 243)') {
      ingredient.style.backgroundColor = '#fff';
      removeSlice(bodyID);
    } else {
      ingredient.style.backgroundColor = '#2196F3';
      makeSlice(bodyID);
    }
  });
}

function makeSlice(id) {
  if (id == 'wheat-bread') {
    slices.push(s0);
    backgroundColors.push('rgba(150, 122, 75, 0.4)');
    borderColors.push('rgba(150, 122, 75, 1)');
  } else if (id == 'white-bread') {
    slices.push(s1);
    backgroundColors.push('rgba(229, 206, 167, 0.4)');
    borderColors.push('rgba(229, 206, 167, 1)');
  } else if (id == 'beef') {
    slices.push(s2);
    backgroundColors.push('rgba(61, 21, 15, 0.4)');
    borderColors.push('rgba(61, 21, 15, 1)');
  } else if (id == 'chicken') {
    slices.push(s3);
    backgroundColors.push('rgba(117, 60, 4, 0.4)');
    borderColors.push('rgba(117, 60, 4, 1)');
  } else if (id == 'cold-cut') {
    slices.push(s4);
    backgroundColors.push('rgba(183, 77, 114, 0.4)');
    borderColors.push('rgba(183, 77, 114, 1)');
  } else if (id == 'salami') {
    slices.push(s5);
    backgroundColors.push('rgba(132, 33, 18, 0.4)');
    borderColors.push('rgba(132, 33, 18, 1)');
  } else if (id == 'kale') {
    slices.push(s6);
    backgroundColors.push('rgba(3, 38, 1, 0.4)');
    borderColors.push('rgba(3, 38, 1, 1)');
  } else if (id == 'spinach') {
    slices.push(s7);
    backgroundColors.push('rgba(23, 112, 17, 0.4)');
    borderColors.push('rgba(23, 112, 17, 1)');
  } else if (id == 'tomato') {
    slices.push(s8);
    backgroundColors.push('rgba(188, 46, 11, 0.4)');
    borderColors.push('rgba(188, 46, 11, 1)');
  } else if (id == 'cheddar') {
    slices.push(s9);
    backgroundColors.push('rgba(224, 115, 13, 0.4)');
    borderColors.push('rgba(224, 115, 13, 1)');
  } else if (id == 'almond') {
    chooseBeverage();
  } else if (id == 'orange') {
    chooseBeverage();
  }
  positionSlice();
}

function removeSlice(id) {
  var index;
  if (id == 'wheat-bread') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s0) {
        doSplice(i);
      }
    }
  } else if (id == 'white-bread') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s1) {
        doSplice(i);
      }
    }
  } else if (id == 'beef') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s2) {
        doSplice(i);
      }
    }
  } else if (id == 'chicken') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s3) {
        doSplice(i);
      }
    }
  } else if (id == 'cold-cut') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s4) {
        doSplice(i);
      }
    }
  } else if (id == 'salami') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s5) {
        doSplice(i);
      }
    }
  } else if (id == 'kale') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s6) {
        doSplice(i);
      }
    }
  } else if (id == 'spinach') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s7) {
        doSplice(i);
      }
    }
  } else if (id == 'tomato') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s8) {
        doSplice(i);
      }
    }
  } else if (id == 'cheddar') {
    for (var i = 0; i < slices.length; i++) {
      if (slices[i] == s9) {
        doSplice(i);
      }
    }
  } else if (id == 'almond') {
    chooseBeverage();
  } else if (id == 'orange') {
    chooseBeverage();
  }
}

function positionSlice() {
  var space = 25;

  for (var i = 0; i < slices.length; i++) {
    slices[i].className = 'show';
    slices[i].style.bottom = (150 + (i * space)) + 'px';
    slices[i].style.zIndex = zindex[i];
  }
}

function doSplice(index) {
  slices[index].className = 'hide';
  slices.splice(index, 1);
  backgroundColors.splice(index, 1);
  borderColors.splice(index, 1);
  positionSlice();
}

function chooseBeverage() {

}

var footprint = document.querySelector('#footprint');
var fbutton = document.querySelector('#getFoot');
var rbutton = document.querySelector('#refresh');
var menu = document.querySelector('#menu');
var sandwich = document.querySelector('#sandwich');
var wrapper = document.querySelector('#wrapper');
var footer = document.querySelector('#myInfo');

fbutton.addEventListener('click', function() {
  menu.className = 'disappear';
  sandwich.className = 'left';
  footprint.className = 'opaque';
  footer.className = 'disappear';
  for (var i = 0; i < slices.length; i++) {
    slices[i].className = 'sandwichShift';
  }
  formatChart(slices);
});

fbutton.addEventListener('mouseover', function() {
  fbutton.style.backgroundColor = '#FF7F50';
});

fbutton.addEventListener('mouseout', function() {
  fbutton.style.backgroundColor = '#2196F3';
});

rbutton.addEventListener('mouseover', function() {
  rbutton.style.backgroundColor = '#FF7F50';
});

rbutton.addEventListener('mouseout', function() {
  rbutton.style.backgroundColor = '#2196F3';
});

// the code below is taken from: https://www.chartjs.org/docs/latest/

var ingredients = [];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: '$$ per Calorie',
            data: [12, 19, 3, 5, 2, 3, 15, 8, 4, 1],
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    autoSkip: false,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    autoSkip: false
                }
            }]
        }
    }
});

function formatChart(s) {
  for (var i = 0; i < s.length; i++) {
    ingredients.push(s[i].alt);
  }
  for (var i = 0; i < ingredients.length; i++) {
    myChart.data.labels.push(ingredients[i]);
    myChart.update();
  }
}

console.log(ingredients);
