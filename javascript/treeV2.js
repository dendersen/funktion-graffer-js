function treeV2(n){//draws the collatz tree
  length = height/200
  frameRate(60)
  stroke(255,0,0) //gets a random color
  strokeWeight(LI)
  push()//remembers current settings
  translate(width/4, height/4*3)//moves the point considered 0,0
  treeV2ref(collatzMath(n))//starts the drawing 
  console.log(x)
}

function treeV2ref(n) {//draws the branches of the tree
  if(n > 1) treeV2ref(collatzMath(n)/* calculates the next value*/ )
  push()
  rotate(angelsV2(n)/*calculates the angel that the branch rotates based on the vurrent value*/)
  line(0,0,0,-length)
  translate(0,-length)
}

function angelsV2(n){//returns the amount of rotation
  if (collatzCheck(n)) return (radians(8))
  else return (radians(340))
}