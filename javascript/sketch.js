
function setup() {
  createCanvas(windowWidth-10,windowHeight-10)
	windowWidth -= 20
	windowHeight -= 10
	createCanvas(windowWidth, windowHeight-1);
	background(backgroundShade)
  stroke(255)
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)
	y=-height/2
	x=-width/2
  specificSetup()
}

var backgroundShade = 80

var x
var y
var LI = 2

function draw() {
  if(width < 1000 || height < 700){
    if(width<height) {
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
      treeCollatz(x)
      x++
    break
    case "specific":
      specificCollatz()
    break
  }
}

let topPoint = 0
let longPoint = 0

function pointDraw(z,d){ //makes a point showing where is currently being drawn
  point(z+width/2,-d+height/2)
  
  // draws lines on x and y for drawn point
  // point(x+width/2,height/2)
  // point(width/2,-y+height/2)
  // strokeWeight(LI)
  // stroke(0)
}