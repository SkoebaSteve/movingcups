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

    // pick a random number for the winning cup
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

var getCurrentPosition = function(circle){
  var leftOffset = circle.getBoundingClientRect().left;
  return leftOffset;
};

var bigTimeLine = new TimelineMax();

var move = function(){

  // shuffle(circles);

  var tl = new TimelineMax();
  bigTimeLine.add(tl);
  // first move

  console.log(circles[0].getBBox());
  console.log(getCurrentPosition(circles[0].node));

  console.log(circles[1].getBBox());
  console.log(getCurrentPosition(circles[1].node));

  // tl.to(circles[0].node, 1,{
  //   bezier: {
  //     type: 'soft',
  //     values:[{
  //       x:150,
  //       y:150
  //     },{
  //       x:350,
  //       y:0
  //     }],
  //     curviness: 0
  //   },
  //   ease: Power1.easeInOut
  // }, 0)

  // tl.to(circles[1].node, 1,{
  //   bezier: {
  //     type: 'soft',
  //     values:[{
  //       x:-150,
  //       y:-150
  //     },{
  //       x:-350,
  //       y:0
  //     }],
  //     curviness: 0
  //   },
  //   ease: Power1.easeInOut
  // }, 0)
}


button.addEventListener("click", move);