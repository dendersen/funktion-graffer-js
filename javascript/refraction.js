function standardCollatz() {//the code that draws the first menu option and the standard version that is picked when opened
  frameRate(10);
  if (running && x < width / 2) {//allows for turning off the program when done or when debuging
    drawStorage(); //Draws the previusly calculated points
    rangeDraw(x + (width / 2)); //draws the fading grafs
    stroke(0, 255, 0); //sets color
    CollatzConjectureMid(0, (x + (width / 2))); //draws the current graf
    strokeWeight(LI);//sets line thicknes
    stroke(255, 0, 255);//sets color
    CollatzConjecture(x + (width / 2), 0);//calculates the y for the new point
    pointDraw(x, y);//draws new point
    drawText(); //draws the infop text in top left
    storageY[x] = y; //saves the point so it can be draw next time
  }
}

function CollatzConjecture(z,n){  
	n++; 

  //saves for text
	if (z > topPoint) topPoint = z
	if (n > longPoint) longPoint = n

  //stops code
	if(z==1 || z == 0){
		y=n
		return
	}

  //calculates the next value
	if(z%2 != 0){
		z = (3*z)+1
		CollatzConjecture(z,n)
		return
	}else{
		z = z/2
		CollatzConjecture(z,n)
		return
	}
}

const collect = []

function CollatzConjectureMid(prepointX,prepointY){
	let z
	let mod = 10//decreases the hight of spikes so that the intire graf can be visible
	let distance = 40// the distance that will be moved on every step taken

  //draws the lines between the difrent values of the steps
  //and calculates the values of each steps
  strokeWeight(2)
	if(prepointY <= 1){
		line(prepointX,-(prepointY/mod)+height,prepointX+distance,-(z/mod)+height)
		return
	}
	if(prepointY%2 != 0){
		z = (3*prepointY)+1
		line(prepointX,-(prepointY/mod)+height,prepointX+distance,-(z/mod)+height)
		CollatzConjectureMid(prepointX+distance,z)
		return
	}else{
		z = prepointY/2
		line(prepointX,-(prepointY/mod)+height,prepointX+distance,-(z/mod)+height)
		CollatzConjectureMid(prepointX+distance,z)
		return
	}
}


function drawStorage (){//draws previusly calculated points and resets the canvas
  background(backgroundShade)
  stroke(255)
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)//re draws the line that is cleared by the background function
  strokeWeight(LI)
  stroke(255,0,255)
  for(let i = -(width/2); i < x+2; i++) {
    pointDraw(i,storageY[i])
  }
}

let inspection = 15

function rangeDraw(z){ //draws previusly made grafs
  for(let i = 1; i <= inspection; i++){
    if(z-i<0){
      // console.log (z-i,"end")
      return
    }
    // console.log (z-i)
    stroke(0,255,0,255-((255/inspection)*i))//uses the alpha channel to make the graf seethrough
    CollatzConjectureMid(0,z-i)
  }
}

function drawText(){//draws text to tell you about the results
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