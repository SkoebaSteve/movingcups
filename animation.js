var s = Snap("#svg").attr({
  viewBox: "0 0 1000 800",
});

var circle1 = s.circle(150, 150, 50).attr({
  id: "circle1"
});
var circle2 = s.circle(500, 150, 50).attr({
  id: "circle2"
});
var circle3 = s.circle(850, 150, 50).attr({
  id: "circle3"
});


var circles = [
    circle1,
    circle2,
    circle3
  ],
    randomNumber = 0;
    button = document.querySelector(".move");

    randomNumber = Math.floor(Math.random() * circles.length);

    circles[randomNumber].attr({fill:"green"});

var bigTimeLine = new TimelineMax();

var firstMove = function(){

  var tl = new TimelineMax({repeat:1, yoyo:true, onRepeat:function(){console.log("test")}});
  bigTimeLine.add(tl);
  // first move
  tl.to(circles[0].node, 1,{
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

  tl.to(circles[1].node, 1,{
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

  // second move

  tl.to(circles[0].node, 1,{
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

  tl.to(circles[2].node, 1,{
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

  // third move

  tl.to(circles[0].node, 1,{
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

  tl.to(circles[1].node, 1,{
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

  // fourth move

  tl.to(circles[0].node, 1,{
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
  }, 3)

  tl.to(circles[1].node, 1,{
    bezier: {
      type: 'soft',
      values:[{
        x:0,
        y:-150
      },{
        x:-350,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 3)

  // fifth move

  tl.to(circles[0].node, 1,{
    bezier: {
      type: 'soft',
      values:[{
        x: 500,
        y: 150
      },{
        x: 350,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 4)

  tl.to(circles[2].node, 1,{
    bezier: {
      type: 'soft',
      values:[{
        x: -150,
        y: -150
      },{
        x: 0,
        y:0
      }],
      curviness: 0
    },
    ease: Power1.easeInOut
  }, 4)
 }


button.addEventListener("click", firstMove);