function CollatzConjecture(z,n){ 
	n++; 
	if(z==1 || z == 0){
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
	let mod = 10
	let distance = 5
  strokeWeight(1)
	if(prepointY <= 1){
		line(prepointX,-(prepointY/mod)+height,prepointX+distance,-(z/mod)+height)
		done = true
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