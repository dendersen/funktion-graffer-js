
function setup() {
	windowWidth -= 20
	windowHeight -= 10
	createCanvas(windowWidth, windowHeight-1);
	background(80)
  stroke(255)
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)
	y=-height/2
	x=-width/2
}

var x
var y
var LI = 2

function draw() {
  frameRate(1)
  if(running && x < width/2){
    if(!done){
      drawStorage()
      CollatzConjectureMid(0,(x+(width/2)))
      stroke(0)
      textSize(60)
      text(x+width/2, width-width/16, height/16, width, height/4  )
    }else{
      stroke(0)
      strokeWeight(width/3000)
      textSize(60)
      text(x+width/2, width-width/16, height/16, width, height/4  )
      stroke(255,0,255)
      strokeWeight(LI)
      CollatzConjecture(x+(width/2),0)
      pointDraw(x,y)
      storageY [x] = y
      x++
      done = false
    }
  }
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

function drawStorage (){
  background(80)
  stroke(255)
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)
  strokeWeight(LI)
  stroke(255,0,255)
  for(let i = -(width/2); i < width/2+1; i++) {
    pointDraw(i,storageY[i])
  }
}