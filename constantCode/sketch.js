
function setup() {
	createCanvas(windowWidth, windowHeight);
	windowWidth -= 20
	windowHeight -= 10
	background(80)
	strokeWeight(LI)
	line(width/2, height-(height/30), width/2, (height/30))
	line(width-(width/40), height/2, (width/40), height/2)
	y=-height/2
	x=-width/2
}

var xx = 0
var yy = 30
var LI = 3

let colR = 255
let colG = 0
let colB = 0

let action = 0
let density = 100
let runNumber = 0
let yONE = 0
let reruns = 3

const funkStyle = []

function draw() {
	for(let i = 0; i<(((10*runNumber+1)*(width/2500))*reruns)/funkStyle.length; i++){
		for(let i = 0; i<funkStyle.length; i++){
			PointDrawSimple(xx,SimpleFunk(xx))
			//pointDrawMulty(xx,multyFunk(xx))
			pointMove()
		}
	}
}

function pointMove(){
  if(x<width/2){
    if(runNumber>20){
    x+=width/(runNumber*density*40)
    }else{
      x+=width/((runNumber/2)*(density*2))
    }
  }else{
    x=-width/2
    colorControl()
  }
}

function colorControl() {
  runNumber++
  print(runNumber)
  if (action < 256) {
    colR -= 32
    colB += 32
    action += 32
  } else if (action < 512) {
    colB -= 32
    colG += 32
    action += 32
  } else if (action < 768) {
    colG -= 32
    colR += 32
    action += 32
  } else {
    action = 0
  }
}