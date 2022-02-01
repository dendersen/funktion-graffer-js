
function setup() {
	windowWidth -= 20
	windowHeight -= 10
	createCanvas(windowWidth, windowHeight-1);
	background(80)
  stroke(255)
	strokeWeight(2)
	// line(width/2, height-(height/30), width/2, (height/30))
	line(width-(width/40), height/2, (width/40), height/2)
	y=-height/2
	x=-width/2
  
}

var x
var y

function draw() {
  frameRate(20)
  if(running && x < width/2){
    if(!done){
    CollatzConjectureMid(0,(x+(width/2)))
    }else{
    stroke(255,0,255)
    strokeWeight(3)
    CollatzConjecture(x+(width/2),0)
    pointDraw(x,y)
    x++
    done = false
    }
  }
}

var running = true

function pointDraw(z,d){ //makes a point showing where is currently being drawn
  point(z+width/2,-d+height/2)
  
  //draws lines on x and y for drawn point
  // point(x+width/2,height/2)
  // point(width/2,-y+height/2)
  // strokeWeight(LI)
  // stroke(0)
}