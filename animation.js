var s = Snap("#svg").attr({
  viewBox: "0 0 1000 800",
});

var circle1 = s.circle(150, 150, 50).attr({
  id: "circle1",
  fill: "blue"
});
var circle2 = s.circle(500, 150, 50).attr({
  id: "circle2",
  fill: "red"
});
var circle3 = s.circle(850, 150, 50).attr({
  id: "circle3",
  fill: "yellow"
});


var circles = [
    circle1,
    circle2,
    circle3
  ],
    randomNumber = 0;
    button = document.querySelector(".move");

    randomNumber = Math.floor(Math.random() * circles.length);
    circles[randomNumber].attr({stroke:"green", strokeWidth:3});


// use shuffle to always pick the first two for a random swap
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getCurrentPosition(circle){
  circle.getBBox();
};

function move(){
  shuffle(circles);
};


button.addEventListener("click", move);