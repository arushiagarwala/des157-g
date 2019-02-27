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
      ingredient.style.backgroundColor = '#F0F0F0';
    }
  });

  ingredient.addEventListener('click', function() {
    var bodyID = ingredient.id;
    if (ingredient.style.backgroundColor == 'rgb(33, 150, 243)') {
      ingredient.style.backgroundColor = '#F0F0F0';
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
  } else if (id == 'white-bread') {
    slices.push(s1);
  } else if (id == 'beef') {
    slices.push(s2);
  } else if (id == 'chicken') {
    slices.push(s3);
  } else if (id == 'cold-cut') {
    slices.push(s4);
  } else if (id == 'salami') {
    slices.push(s5);
  } else if (id == 'kale') {
    slices.push(s6);
  } else if (id == 'spinach') {
    slices.push(s7);
  } else if (id == 'tomato') {
    slices.push(s8);
  } else if (id == 'cheddar') {
    slices.push(s9);
  } else if (id == 'almond') {
    chooseBeverage();
  } else if (id == 'orange') {
    chooseBeverage();
  }
  positionSlice();
  console.log(slices);
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
  positionSlice();
}

function chooseBeverage() {

}

var footprint = document.querySelector('#footprint');
var button = document.querySelector('#getfoot');

// the code below is taken from: https://www.chartjs.org/docs/latest/

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
