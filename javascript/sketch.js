
function setup() {
  if(windowWidth < 1000 || windowHeight < 700){
    createCanvas(windowWidth-10,windowHeight-10)
    return
  }
	windowWidth -= 20
	windowHeight -= 10
	createCanvas(windowWidth, windowHeight-1);
	background(backgroundShade)
  stroke(255)
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)
	y=-height/2
	x=-width/2
}

var backgroundShade = 80

var x
var y
var LI = 2

function draw() {
  if(windowWidth < 1000 || windowHeight < 700){
    if(windowWidth<windowHeight) {
      textSize(windowWidth/10)
    }else {
      textSize(windowHeight/10)
    }
    text("please use ctrl and - to zoom out, resolution too low for proper quality",0,0,width,height)
    return
  }
  switch(mode){
    case "standard":
      standardCollatz();
      x++
    break
    case "menu":
      menuChanger()
    break
    case "tree":
      treeCollatz(x+width/2)
      x++
    break
    case "specific":
      
    break
  }
}

let topPoint = 0
let longPoint = 0

function drawText(){
  stroke(0)
  strokeWeight(1)
  textSize(height/40)
  text("current x = " + (x+(width/2)) + " / " + width, width-width/5, height/16, width, height/16)
  text("current y = " + (y), width-width/5, (height/16)*2, width, height/16)
  text("highest point = " + topPoint, width-width/5, (height/16)*3, width, height/4)
  text("longest travel = " + longPoint, width-width/5, (height/16)*4, width, height /4)
}
const storageY = []
var running = true

function pointDraw(z,d){ //makes a point showing where is currently being drawn
  point(z+width/2,-d+height/2)
  
  //draws lines on x and y for drawn point
  // point(x+width/2,height/2)
  // point(width/2,-y+height/2)
  // strokeWeight(LI)
  // stroke(0)
}