function setup() {//setup for standard view style
  createCanvas(windowWidth-10,windowHeight-10)
	background(backgroundShade) //sets the background coller to a neutral grey
  stroke(255) 
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)// this line and the 2 prior draw a horizontal line in the center of the screen
	y=-height/2
	x=-width/2 // preps for first point as, x and y are calculated like a standard coordinate system instead of origin being in the top left corner
  specificSetup() // preps a slider for specific setup
  button1();//draws the menu button
}

var backgroundShade = 80 //chooses the shade of white that will be used for the background everywhere

var x
var y
var LI = 2 //determins the standerd line size for all lines or points used in the project

function draw() {
  if(width < 1000 || height < 700){ // spits out a visible error of the screen is too small for the project
    if(width<height) {
      textSize(windowWidth/10)
    }else {
      textSize(windowHeight/10) 
    }
    text("please use ctrl and - to zoom out, resolution too low for proper quality",0,0,width,height)
    return
  }
  switch(mode){ // runs the appropriet code for the mode currently picked by the user
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
}