let length

function treeCollatz(n){
  length = height/300
  frameRate(60)
  stroke(random(255),random(255),random(255))
  strokeWeight(2)
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
  if (collatzCheck(n)) return (radians(355))
  else return (radians(10))
}

function collatzCheck(n){//no mater what thies is always false for some reason
  if(n % 2 == 0) return true
}