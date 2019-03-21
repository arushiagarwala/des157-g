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
var plate = document.querySelector('#plate');

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
var zindex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
var space;
var andiScore = [];
var gasEmissions = [];
var chartLabels = [];
var backgroundColors = [];
var borderColors = [];
var ctx = document.getElementById("myChart");
var chartMode = false;

var myChart = new Chart(ctx, {
    type: 'bar',
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
    if (ingredient.style.backgroundColor == 'rgb(156, 247, 145)') {
      //if statement can only analyze backgroundColor in rgb mode
      //rgb(156, 247, 145) = #9cf791 (or the color of the ingredient background when selected)
    } else {
      ingredient.style.backgroundColor = '#f5f5f0';
    }
  });

  ingredient.addEventListener('mouseout', function() {
    if (ingredient.style.backgroundColor == 'rgb(156, 247, 145)') {
    } else {
      ingredient.style.backgroundColor = '#fff';
    }
  });

  ingredient.addEventListener('click', function() {
    var bodyID = ingredient.id;
    if (ingredient.style.backgroundColor == 'rgb(156, 247, 145)') {
      ingredient.style.backgroundColor = '#fff';
      removeSlice(bodyID);
    } else {
      ingredient.style.backgroundColor = '#9cf791';
      makeSlice(bodyID);
    }
  });
}

function makeSlice(id) {
  if (id == 'wheat-bread') {
    slices.push(s0);
    backgroundColors.push('rgba(150, 122, 75, 0.4)');
    borderColors.push('rgba(150, 122, 75, 1)');
    andiScore.push(30);
    gasEmissions.push(0.977);
  } else if (id == 'white-bread') {
    slices.push(s1);
    backgroundColors.push('rgba(229, 206, 167, 0.4)');
    borderColors.push('rgba(229, 206, 167, 1)');
    andiScore.push(9);
    gasEmissions.push(1.244);
  } else if (id == 'beef') {
    slices.push(s2);
    backgroundColors.push('rgba(61, 21, 15, 0.4)');
    borderColors.push('rgba(61, 21, 15, 1)');
    andiScore.push(21);
    gasEmissions.push(27.0);
  } else if (id == 'chicken') {
    slices.push(s3);
    backgroundColors.push('rgba(117, 60, 4, 0.4)');
    borderColors.push('rgba(117, 60, 4, 1)');
    andiScore.push(24);
    gasEmissions.push(6.9);
  } else if (id == 'cold-cut') {
    slices.push(s4);
    backgroundColors.push('rgba(183, 77, 114, 0.4)');
    borderColors.push('rgba(183, 77, 114, 1)');
    andiScore.push(17);
    gasEmissions.push(10.9);
  } else if (id == 'salami') {
    slices.push(s5);
    backgroundColors.push('rgba(132, 33, 18, 0.4)');
    borderColors.push('rgba(132, 33, 18, 1)');
    andiScore.push(14);
    gasEmissions.push(12.1);
  } else if (id == 'kale') {
    slices.push(s6);
    backgroundColors.push('rgba(3, 38, 1, 0.4)');
    borderColors.push('rgba(3, 38, 1, 1)');
    andiScore.push(1000);
    gasEmissions.push(2.0);
  } else if (id == 'spinach') {
    slices.push(s7);
    backgroundColors.push('rgba(23, 112, 17, 0.4)');
    borderColors.push('rgba(23, 112, 17, 1)');
    andiScore.push(739);
    gasEmissions.push(2.0);
  } else if (id == 'tomato') {
    slices.push(s8);
    backgroundColors.push('rgba(188, 46, 11, 0.4)');
    borderColors.push('rgba(188, 46, 11, 1)');
    andiScore.push(164);
    gasEmissions.push(1.1);
  } else if (id == 'cheddar') {
    slices.push(s9);
    backgroundColors.push('rgba(224, 115, 13, 0.4)');
    borderColors.push('rgba(224, 115, 13, 1)');
    andiScore.push(15);
    gasEmissions.push(9.78);
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
  space = 25;

  for (var i = 0; i < slices.length; i++) {
    slices[i].className = 'show';
    slices[i].style.bottom = (65 + (i * space)) + 'px';
    slices[i].style.zIndex = zindex[i];
  }
}

function doSplice(index) {
  slices[index].className = 'hide';
  slices.splice(index, 1);
  backgroundColors.splice(index, 1);
  borderColors.splice(index, 1);
  andiScore.splice(index, 1);
  gasEmissions.splice(index, 1);
  positionSlice();
  formatChart(slices);
}

function chooseBeverage() {

}

var footprint = document.querySelector('#footprint');
var fbutton = document.querySelector('#getFoot');
var rbutton = document.querySelector('#refresh');
var menu = document.querySelector('#menu');
var sandwich = document.querySelector('#sandwich');
var cover = document.querySelector('#cover');
var wrapper = document.querySelector('#wrapper');
var footer = document.querySelector('#myInfo');
var back = document.querySelector('#back');
var andi = document.querySelector('#andi');
var gas = document.querySelector('#gas');

var extraInfo = document.querySelector('#extraInfo');
var info = document.querySelector('#info');
var title = document.querySelector('#title');
var infoLink = document.querySelector('#infoLink');
var x = document.querySelector('#x');
var chartDescription = document.querySelector('#chartDescription');

sandwich.addEventListener('mouseover', function() {
  if (chartMode == true) {
    chartDescription.innerHTML = 'Click on each ingredient to learn more!';
  }
});

sandwich.addEventListener('mouseout', function() {
  if (chartMode == true) {
    chartDescription.innerHTML = 'Click on the buttons above to change the chart view!';
  }
});

fbutton.addEventListener('click', function() {
  if (slices.length == 0) {
    console.log('Choose ingredients to make a sandwich! To find the carbon footprint of the sandwich you made, click "my footprint!".');
    return;
  }
  addCoverSlice(slices);
  menu.className = 'disappear';
  sandwich.className = 'left';
  footprint.className = 'opaque';
  footer.className = 'disappear';
  formatChart(slices);
  chartMode = true;
  makeSlicesHoverable(slices);
});

fbutton.addEventListener('mouseover', function() {
  fbutton.style.backgroundColor = '#FF7F50';
});

fbutton.addEventListener('mouseout', function() {
  fbutton.style.backgroundColor = '#2196F3';
});

rbutton.addEventListener('click', function() {
  for (var i = 0; i < slices.length; i++) {
    slices[i].className = 'hide';
  }
  slices = [];
  backgroundColors = [];
  borderColors = [];
  andiScore = [];
  gasEmissions = [];
  wheat.style.backgroundColor = '#fff';
  white.style.backgroundColor = '#fff';
  beef.style.backgroundColor = '#fff';
  chicken.style.backgroundColor = '#fff';
  coldCut.style.backgroundColor = '#fff';
  salami.style.backgroundColor = '#fff';
  kale.style.backgroundColor = '#fff';
  spinach.style.backgroundColor = '#fff';
  tomato.style.backgroundColor = '#fff';
  cheddar.style.backgroundColor = '#fff';
  almond.style.backgroundColor = '#fff';
  orange.style.backgroundColor = '#fff';
});

rbutton.addEventListener('mouseover', function() {
  rbutton.style.backgroundColor = '#FF7F50';
});

rbutton.addEventListener('mouseout', function() {
  rbutton.style.backgroundColor = '#2196F3';
});

back.addEventListener('click', function() {
  chartMode = false;
  extraInfo.className = 'transparent';
  menu.className = 'stay';
  sandwich.className = 'right';
  footprint.className = 'transparent';
  footer.className = 'stay';
  cover.className = 'hide';
});

back.addEventListener('mouseover', function() {
  back.style.backgroundColor = '#FF7F50';
});

back.addEventListener('mouseout', function() {
  back.style.backgroundColor = '#2196F3';
});

andi.addEventListener('click', function() {
  chartDescription.innerHTML = 'The ANDI score is a method of measuring the nutrient richness of a food compared to its caloric value. Simply put, the calculation can be broken down to health = nutrients/calories. This method was created by Dr. Fuhrman, MD. You can learn more about the ANDI score <a href ="https://www.drfuhrman.com/library/eat-to-live-blog/128/andi-food-scores-rating-the-nutrient-density-of-foods">here.</a>';
  myChart.data = {
      labels: chartLabels,
      datasets: [{
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          label: 'ANDI Score (by Dr. Fuhrman, MD)',
          data: andiScore,
          borderWidth: 1
      }]
  };
  myChart.update();
});

andi.addEventListener('mouseover', function() {
  andi.style.backgroundColor = '#FF7F50';
});

andi.addEventListener('mouseout', function() {
  andi.style.backgroundColor = '#2196F3';
});

gas.addEventListener('click', function() {
  chartDescription.innerHTML = 'To determine the carbon footprint of a certain food, many factors such as travel, energy used in production, and energy used during packaging have to be considered. This chart view describes the approximate kg of co2 emmited through the production of each food type. You can learn more <a href ="http://www.greeneatz.com/foods-carbon-footprint.html">here.</a>';
  myChart.data = {
      labels: chartLabels,
      datasets: [{
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          label: 'Greenhouse Gas Emissions (kg CO₂ eq/kg)',
          data: gasEmissions,
          borderWidth: 1
      }]
  };
  myChart.update();
});

gas.addEventListener('mouseover', function() {
  gas.style.backgroundColor = '#FF7F50';
});

gas.addEventListener('mouseout', function() {
  gas.style.backgroundColor = '#2196F3';
});

function formatChart(s) {
  chartLabels = [];
  for (var i = 0; i < s.length; i++) {
    chartLabels.push(s[i].alt);
  }
  myChart.data = {
      labels: chartLabels,
      datasets: [{
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          label: 'ANDI Score (by Dr. Fuhrman, MD)',
          data: andiScore,
          borderWidth: 1
      }]
  };
  myChart.update();
}

x.addEventListener('click', function() {
  extraInfo.className = 'transparent';
});

function makeSlicesHoverable(s) {
  for (var i = 0; i < s.length; i++) {
      if (s[i].id == 's0'){
        s[i].addEventListener('click', function() {
          if (chartMode == false) {
            return;
          }
          extraInfo.className = 'opaque2';
          title.innerHTML = 'Wheat Bread';
          info.innerHTML = 'Wheat bread is not only healthier than white bread, it has less of an environmental impact too. If you are trying to cut out extra carhbohydrates from your diet, getting rid of bread altogether might be the best bet for you.';
          infoLink.href = 'https://wholegrainscouncil.org/blog/2018/01/myths-busted-why-white-bread-not-just-healthy-whole-grain-bread';
        });
      } else if (s[i].id == 's1') {
        s[i].addEventListener('click', function() {
          if (chartMode == false) {
            return;
          }
          extraInfo.className = 'opaque2';
          title.innerHTML = 'White Bread';
          info.innerHTML = 'While many people assume that wheat bread is the healthiest of the breads, the truth of the matter is that while it is indeed healthier, the difference is not that significant.';
          infoLink.href = 'https://wholegrainscouncil.org/blog/2018/01/myths-busted-why-white-bread-not-just-healthy-whole-grain-bread';
        });
      } else if (s[i].id == 's2') {
        s[i].addEventListener('click', function() {
          if (chartMode == false) {
            return;
          }
          extraInfo.className = 'opaque2';
          title.innerHTML = 'Beef';
          info.innerHTML = 'Beef is one of the most if not THE most environmentally dangerous animal/food product on the market. If everyone cut out their beef consumption and replaced it with white meat such as chicken, a significant amount of energy and resources would be saved.';
          infoLink.href = 'http://www.greeneatz.com/foods-carbon-footprint.html';
        });
      } else if (s[i].id == 's3') {
        s[i].addEventListener('click', function() {
          if (chartMode == false) {
            return;
          }
          extraInfo.className = 'opaque2';
          title.innerHTML = 'Chicken';
          info.innerHTML = 'Chicken is one of the most environmentally friendly meats. However, research shows that cutting out meat entirely might be even more beneficial for the environment. Many people are loathe to cut meat out of thier diets because of the excess of protein meat provides. Many people do not realize that there are indeed alternatives to meat, such as chickpeas or kidney beans.';
          infoLink.href = 'https://www.ecowatch.com/15-best-protein-alternatives-to-meat-besides-tofu-1882106660.html';
        });
      } else if (s[i].id == 's4') {

      } else if (s[i].id == 's5') {

      } else if (s[i].id == 's6') {

      } else if (s[i].id == 's7') {

      } else if (s[i].id == 's8') {

      } else if (s[i].id == 's9') {

      }
  }
}

function addCoverSlice(s) {
  cover.src = s[0].src;
  cover.className = 'show';
  cover.style.bottom = (65 + (s.length * space)) + 'px';
  cover.style.zIndex = zindex[s.length];
}
