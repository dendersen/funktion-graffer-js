

function PointDrawSimple(x,y){ //makes a point showing where is currently being drawn
  
  stroke(255)
  strokeWeight(1)
  point(x+width/2,-y+height/2)
  
  //draws lines on x and y for drawn point
  stroke(colR, colG, colB)
  point(x+width/2,height/2)
  point(width/2,-y+height/2)
  strokeWeight(LI)
  stroke(0)
  y = simpleFunk(x)
}

function SimpleFunk(z){
  let result
  //z = z/10
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  //result=sMath.sqrt(Math.tan(z)*10*(Math.sin(z)))
  result = z 
  //result = d(z)
  return(result)
}