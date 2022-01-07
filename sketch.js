function setup() {
  createCanvas(windowWidth, windowHeight);
  windowWidth -= 20
  windowHeight -= 10
  background(80)
  strokeWeight(LI-1)
  line(width/2, height-(height/30), width/2, (height/30))
  line(width-(width/40), height/2, (width/40), height/2)
  y=-height/2
  x=-width/2
  frameRate(600)
}

var x = 0
var y = 30
var LI = 3
function draw() {
  lineDraw()
  pointDraw()
  pointMove()
}

function pointDraw(){ //makes a point showing where is currently being drawn
  stroke(255)
  strokeWeight(LI+1)
  point(x+width/2,-y+height/2)
  
  //draws lines on x and y for drawn point
  stroke(colR, colG, colB)
  strokeWeight(LI-2) 
  point(x+width/2,height/2)
  point(width/2,-y+height/2)
  strokeWeight(LI)
  stroke(0)
}


let colR = 255
let colG = 0
let colB = 0
let action = 0

function funk(){
  let z =x
  y=Math.sin((z)/5)*70
}

function pointMove(y){
  if(x<width/2){
  x+=0.1
  }else{
    x=-height/2
    if(action<256) {
      colR -=32
      colB +=32
      action +=32
    }else if(action<512){
      colB -=32
      colG +=32
      action +=32
    }else if(action<768){
      colG -=32
      colR +=32
      action +=32
    }else{
      action=0
      pointMove()
    }
  }
  funk()
}

function lineDraw(){

}