let length

function treeCollatz(n){
  length = height/25
  frameRate(10)
  strokeWeight(2)
  push()
  translate(width/2, height)
  line(0,0,0,-length)
  translate(0,-length)
  if(n != 1) treeCollatzref(collatzMath(n))
  pop()
}

function treeCollatzref(n) {
  stroke(random(255),random(255),random(255))
  push()
  rotate(angels())
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
  let angel = 2
  switch (collatzCheck(n)){
    case "one":
    return (radians(angel))
    case "two":
    return (radians(360-angel))
  }
}

function collatzCheck(n){//no mater what thies is always false for some reason
  if(n>=collatzMath(n)){
    console.log("one")
    return ("one")
  }else{
    console.log("two")
    return("two")
  }
}