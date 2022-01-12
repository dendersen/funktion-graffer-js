
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
	firstY()
}

var x = 0
var y = 30
var LI = 3

let colR = 255
let colG = 0
let colB = 0

let action = 0
let density = 100
let offset = density
let runNumber = 0
let yONE = 0

function draw() {
	for(let i = 0; i<1000; i++){
	pointDraw()
	pointMove()
	}
}

function firstY(){
	let i = -width/2
	while(funk(i) < -height/2){
	yONE = i+1
	i++
	}
}