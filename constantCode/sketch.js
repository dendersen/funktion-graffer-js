
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
  fillOperations()
}

var x
var y
var LI = 3

let colR = 255
let colG = 0
let colB = 0

let action = 0
let density = 1000
let runNumber = 0
let reruns = 3

function draw() {
  for(let j = 0; j<500  ; j++){
	for(let i = 0; i<operation.length; i++){
		if (operation [i] == "multy"){
      pointDrawMulty(i)
		}else{
      pointDraw(i,true)
		}
	}
  pointMove()
}}



const operation = [] //"simple" || "multy"
const calculate = [] //a funktion object that returns y



function fillOperations(){
  operation [0] = "simple"
  operation [1] = "multy"
  operation [2] = operation [0]
  operation [3] = operation [0]

  calculate [0] = SimpleFunk;
  calculate [1] = MultyFunk;
  calculate [2] = SimpleFunk1;
  calculate [3] = SimpleFunk2;
  console.log("operations loaded", operation)
}

// function draw(){
//   Test [3](5)
// }
// const Test = []
// Test [3] = Test1
// function Test1 (num){
//   console.log ("running",num)
// }

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