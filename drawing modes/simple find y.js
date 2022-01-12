

function pointDraw(){ //makes a point showing where is currently being drawn
  stroke(255)
  strokeWeight(1)
  point(x+width/2,-y+height/2)

  //draws lines on x and y for drawn point
  stroke(colR, colG, colB)
  point(x+width/2,height/2)
  point(width/2,-y+height/2)
  strokeWeight(LI)
  stroke(0)
}

function pointMove(){
  if(runNumber>10){
    if(x<width/2){
      x+=width/(runNumber*density*10)
    }else{
      x=-(height/2+1)-yONE
      actionControl()
    }
  }else{
    if(x<width/2){
      x+=width/(runNumber*density)
    }else{
      x=-(height/2+1)-yONE
      actionControl()
    }
  }
  y = funk(x)
}

function actionControl() {
  runNumber++
  print(runNumber)
  if (runNumber > 9) {
    x = 0 - (width / 2)
  }
  if (action < 256) {
    colR -= 32
    colB += 32
    action += 32
  } else if (action < 512) {
    colB -= 32
    colG += 32
    action += 32
  } else if (action < 768) {
    colG -= 32
    colR += 32
    action += 32
  } else {
    action = 0
    pointMove()
  }
}

function funk(z){
  let result
  z = z/5
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))+z*100
  //result=Math.tan(z)*10*(Math.sin(z))
  result = z*20
  
  return(result)
}