function TRI(n,CC){//draws the collatz tree
  length = height/100
  frameRate(60)
  stroke(255,0,0) //gets a random color
  strokeWeight(LI)
  push()//remembers current settings
  translate(width/2, height/2)//moves the point considered 0,0
  treeFunref(collatzMath(n),CC)//starts the drawing 
}

function treeFunref(n,CC) {//draws the branches of the tree
  if(n > 1) treeV2ref(collatzMath(n)/* calculates the next value*/ )
  push()
  rotate(angelsFun(n,CC)/*calculates the angel that the branch rotates based on the vurrent value*/)
  line(0,0,0,-length)
  translate(0,-length)
}

function angelsFun(n,CC){//returns the amount of rotation
  if(CC){
    if (collatzCheck(n)) return (radians(120))
    else return (radians(-120))
  }
  if (collatzCheck(n)) return (radians(60))
  else return (radians(-60))
}