let length

function treeCollatz(n){
  // background(backgroundShade)
  length = height/200
  frameRate(10)
  stroke(random(255),random(255),random(255))
  strokeWeight(LI)
  push()
  translate(width/4, height/4*3)
  line(0,0,0,-length)
  translate(0,-length)
  if(n != 1) treeCollatzref(collatzMath(n))
  pop()
}

function treeCollatzref(n) {
  push()
  rotate(angels(n))
  line(0,0,0,-length)
  translate(0,-length)
  if(n > 1) treeCollatzref(collatzMath(n))
  pop()
}

function collatzMath(n){
	if(n%2 != 0){
		return((n*3)+1)
	}else{
		return(n/2)
	}
}

function angels(n){
  if (collatzCheck(n)) return (radians(345))
  else return (radians(24))
}

function collatzCheck(n){
  if(n % 2 == 0) return true
}