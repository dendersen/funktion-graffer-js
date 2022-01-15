

function pointDraw(id,CC){ //makes a point showing where is currently being drawn
  if(CC) y = calculate[id]()
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

function pointMove(id){
  if(x<width/2){
    if(runNumber>20){
    x+=width/(runNumber*density*40)
    }else{
      x+=width/((runNumber/2)*(density*2))
    }
  }else{
    x=-(width/2)
    colorControl()
  }
}

function SimpleFunk(){

  z = x/10
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  result=Math.sqrt(Math.tan(z)*10*(Math.sin(z)))
  //result = z 
  //result = d(z)

  return(result)
}

function SimpleFunk1(){

  z = x/40
  result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  //result=Math.sqrt(Math.tan(z)*10*(Math.sin(z)))
  //result = z 
  //result = d(z)

  return(result)
}

function SimpleFunk2(){

  z = x/10
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  //result=Math.sqrt(Math.tan(z)*10*(Math.sin(z)))
  result = z 
  //result = d(z)

  return(result)
}