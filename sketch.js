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

var go = true
var runn = true
var x = 0
var y = 30
var LI = 3
function draw() {
  for(let i = 0; i<1000; i++){
  pointDraw()
  pointMove()
  }
}

function pointDraw(){ //makes a point showing where is currently being drawn
  stroke(255)
  strokeWeight(1)
  point(x+width/2,-y+height/2)

  //draws lines on x and y for drawn point
  stroke(colR, colG, colB)
  strokeWeight(LI-2.5) 
  point(x+width/2,height/2)
  point(width/2,-y+height/2)
  strokeWeight(LI)
  stroke(0)
}

let colR = 255
let colG = 0
let colB = 0
let action = 0
let density = 100
let offset = density
let runNumber = 0
let yONE = 0

function firstY(){
  let i = -width/2
  while(funk(i) < -height/2){
    yONE = i+1
    i++
  }
}

function pointMove(){
  if(runNumber>10){
    if(x<width/2){
      x+=(density)/(runNumber*50)
    }else{
      offset += density/20
      if(offset>(density*1.5)){
        offset = (density/((offset*5/8)))/8
      }
      x=-(width/2-((runNumber)/runNumber-1))-yONE
      runNumber++
      print(runNumber)
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
  }else{
    if(x<width/2){
      x+=density/11
    }else{
      offset += density/20
      if(offset>(density*1.5)){
        offset = (density/((offset*5/8)))/8
      }
      x=-(height/2+offset)
      runNumber++
      print(runNumber)
      if(runNumber>9){
        x=0-(width/2)
      }
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
  }
  y = funk(x)
}

function funk(z){
  let result
  z = z/5
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))+z*100
  //result=Math.tan(z)*10*(Math.sin(z))
  result = z*20
  
  return(result)
}