function standardCollatz() {
  button1();
  frameRate(10);
  if (running && x < width / 2) {
    drawStorage();
    rangeDraw(x + (width / 2));
    stroke(0, 255, 0);
    CollatzConjectureMid(0, (x + (width / 2)));
    stroke(0);
    strokeWeight(width / 3000);
    strokeWeight(LI);
    stroke(255, 0, 255);
    CollatzConjecture(x + (width / 2), 0);
    pointDraw(x, y);
    drawText();
    storageY[x] = y;
  }
}

function CollatzConjecture(z,n){ 
	n++; 

	if (z > topPoint) topPoint = z

	if (n > longPoint) longPoint = n

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
	let distance = 40

  strokeWeight(2)
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


function drawStorage (){
  background(backgroundShade)
  stroke(255)
	strokeWeight(2)
	line(width-(width/40), height/2, (width/40), height/2)
  strokeWeight(LI)
  stroke(255,0,255)
  for(let i = -(width/2); i < width/2+1; i++) {
    pointDraw(i,storageY[i])
  }
}

let inspection = 10

function rangeDraw(z){
  for(let i = 1; i <= inspection; i++){
    if(z-i<0){
      // console.log (z-i,"end")
      return
    }
    // console.log (z-i)
    stroke(0,255,0,255-((255/inspection)*i))
    CollatzConjectureMid(0,z-i)
  }
}