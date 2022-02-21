let length

function treeCollatz(n){
  length = height/100
  frameRate(60)
  stroke(random(255),random(255),random(255))
  strokeWeight(2)
  push()
  translate(width/2, height/2)
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
  if (collatzCheck(n)) return (radians(5))
  else return (radians(355))
}

function collatzCheck(n){//no mater what thies is always false for some reason
  if(n % 2 == 0) return true
}