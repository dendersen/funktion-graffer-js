function CollatzConjecture(z,n){ 
	n++; 
	if(z==1 || z == 0){
		console.log(x,n)
		y=n
		return
	}
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

let done = false
const collect = []

function CollatzConjectureMid(prepointX,prepointY){
	let z
	let mod = 5
	stroke(0,255,0)
  strokeWeight(1)
	if(prepointY <= 1){
		line(prepointX,-(prepointY/mod)+height,prepointX+2,-(z/mod)+height)
		done = true
		return
	}
	if(prepointY%2 != 0){
		z = (3*prepointY)+1
		line(prepointX,-(prepointY/mod)+height,prepointX+2,-(z/mod)+height)
		CollatzConjectureMid(prepointX+2,z)
		return
	}else{
		z = prepointY/2
		line(prepointX,-(prepointY/mod)+height,prepointX+2,-(z/mod)+height)
		CollatzConjectureMid(prepointX+2,z)
		return
	}
}