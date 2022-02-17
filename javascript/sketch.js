
function setup() {
  if(windowWidth < 1000 && windowHeight < 700){
    createCanvas(windowWidth-10,windowHeight-10)
    return
  }
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
  if(windowWidth < 1000 && windowHeight < 700){
    if(windowWidth<windowHeight) {
      textSize(windowWidth/10)
    }else {
      textSize(windowHeight/10)
    }
    text("please use ctrl and - to zoom out, resolution too low for proper quality",0,0,width,height)
    return
  }
  frameRate(60)
  if(running && x < width/2){
    drawStorage()
    rangeDraw(x+(width/2))
    stroke(0,255,0)
    CollatzConjectureMid(0,(x+(width/2)))
    stroke(0)
    strokeWeight(width/3000)
    strokeWeight(LI)
    stroke(255,0,255)
    CollatzConjecture(x+(width/2),0)
    pointDraw(x,y)
    drawText()
    storageY [x] = y
    x++
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

let inspection = 10

function rangeDraw(z){
  for(let i = 1; i <= inspection; i++){
    if(z-i<0){
      // console.log (z-i,"end")
      return
    }
    // console.log (z-i)
    stroke(0,255,0,255-((255/inspection)*i))
    CollatzConjectureMid(0,z-i)
  }
}