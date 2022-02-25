let length

function treeCollatz(n){//draws the collatz tree
  length = height/200
  frameRate(10)
  stroke(random(255),random(255),random(255)) //gets a random color
  strokeWeight(LI)
  push()//remembers current settings
  translate(width/4, height/4*3)//moves the point considered 0,0
  line(0,0,0,-length) //draws the stem of the tree
  translate(0,-length)//moves the 0,0 to the end of the stem
  treeCollatzref(collatzMath(n))//starts the drawing 
  pop()
}

function treeCollatzref(n) {//draws the branches of the tree
  push()
  rotate(angels(n)/*calculates the angel that the branch rotates based on the vurrent value*/)
  line(0,0,0,-length)
  translate(0,-length)
  if(n > 1) treeCollatzref(collatzMath(n)/* calculates the next value*/ )
  pop()
}

function collatzMath(n){//calculates next value
	if(n%2 != 0){
		return((n*3)+1)
	}else{
		return(n/2)
	}
}

function angels(n){//returns the amount of rotation
  if (collatzCheck(n)) return (radians(345))
  else return (radians(24))
}

function collatzCheck(n){ //checks if the number is even
  if(n % 2 == 0) return true
}