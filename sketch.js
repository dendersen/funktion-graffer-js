function setup() {
  createCanvas(windowWidth, windowHeight);
  windowWidth -= 20
  windowHeight -= 10
  background(80)
  strokeWeight(LI-1)
  line(windowWidth/2, windowHeight, windowWidth/2, 20)
  line(windowWidth, windowHeight/2, 20, windowHeight/2)
  //y=-windowHeight/2
  //x=-windowWidth/2
}

var x = 0
var y = 0
var LI = 3
function draw() {
  pointMove()
  lineDraw()
  pointDraw()
}

function pointDraw(){ //makes a point showing where is currently being drawn
  stroke(255)
  strokeWeight(LI+1)
  point(x+windowWidth/2,-y+windowHeight/2)

  //draws lines on x and y for drawn point
  strokeWeight(LI+3) 
  point(x+windowWidth/2,windowHeight/2)
  point(windowWidth/2,-y+windowHeight/2)
  strokeWeight(LI)
  stroke(0)
}


function pointMove(){

}

function lineDraw(){

}