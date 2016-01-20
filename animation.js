var s = Snap("#svg").attr({
  viewBox: "0 0 1000 800",
});

var circle1 = s.circle(150, 150, 50).attr({
  id: "circle1",
  fill: "green"
});
var circle2 = s.circle(500, 150, 50).attr({
  id: "circle2",
  // fill: "red"
});
var circle3 = s.circle(850, 150, 50).attr({
  id: "circle3",
  // fill: "blue"
});

var tl = new TimelineMax({repeat:6, yoyo:true});

var circles = [
    document.getElementById("circle1"),
    document.getElementById("circle2"),
    document.getElementById("circle3")
  ],
    button = document.querySelector(".move"),
    smallStep = function(isNegative){
      var negative = isNegative ? -1 : 1;
      return step =[{
        x: 150 * negative,
        y: 150 * negative
      }, {
        x: 350 * negative,
        y: 0
      }]
    },
    movementPath = [
      [smallStep(false), smallStep(true), smallStep(true)], //switch 1&2
      [smallStep(false), false, false] //switch 1&3
    ],
    speed = 1;
  move = function(){
    for (step = 0; step < movementPath.length; step++) {
      for(coordinates = 0; coordinates < movementPath[0].length; coordinates++){
        if(movementPath[0]){     
          tl.to(circles[coordinates], 1, {
            bezier: {
              type: 'soft',
              values: movementPath[step][coordinates],
              curviness: 0
            },
            ease: Power1.easeInOut
          }, step)
        }
      }

      speed = speed - 20;
    }
 }

 moveFirst = function(){
  // tl.pause(0, true); //Go back to the start (true is to suppress events)
  // tl.remove();
  tl.to(circles[0], 1,{
    bezier: {
      type: 'soft',
      values:[{
        x:150,
        y:150
      },{
        x:350,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 0)

  tl.to(circles[1], 1,{
    bezier: {
      type: 'soft',
      values:[{
        x:-150,
        y:-150
      },{
        x:-350,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 0)

  tl.to(circles[0], 1,{
    bezier: {
      type: 'soft',
      values:[{
        x: 500,
        y: 150
      },{
        x: 700,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 1)

  tl.to(circles[2], 1,{
    bezier: {
      type: 'soft',
      values:[{
        x:-150,
        y:-150
      },{
        x:-350,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 1)

  tl.to(circles[0], 1,{
    bezier: {
      type: 'soft',
      values:[{
        x: 350,
        y: 150
      },{
        x: 0,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 2)

  tl.to(circles[1], 1,{
    bezier: {
      type: 'soft',
      values:[{
        x:0,
        y:-150
      },{
        x:350,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 2)

 }


button.addEventListener("click", moveFirst);