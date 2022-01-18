

function pointDraw(id,CC){ //makes a point showing where is currently being drawn
  if(CC) y = calculate[id]()
  strokeWeight(LI/3)
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
    if(runNumber>30){
    x+=width/(runNumber*density*(height/50))
    }else{
      x+=width/(runNumber*density*(height/500))
    }
  }else{
    x=-width/2
    colorControl()
  }
}

function SimpleFunk(){
  stroke(255,0,255)
  z = x/100
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  result=Math.sqrt(Math.sqrt(Math.pow(Math.tan(z*z)*10*(Math.sin(z*z)),2)))
  //result = z 
  //result = d(z)

  return(result*5)
}

function SimpleFunk1(){
  stroke(100,100,255)
  z = x/40
  result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  //result=Math.sqrt(Math.tan(z)*10*(Math.sin(z)))
  //result = z 
  //result = d(z)

  return(result)
}

function SimpleFunk2(){
  stroke(100,255,100)
  z = x/50
  //result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*(height/50)-(height/2)+(height/40)
  //result=Math.sqrt(Math.tan(z)*10*(Math.sin(z)))
  result = z 
  //result = d(z)

  return(result)
}

function simpleFunk3(){
  stroke(255,100,100)
  z=x/50
  let result
  result = 1/2*x+3
  return (result) 
}

function sin1(){
  stroke(255,0,0)
  z=x/(width/24)
  return (Math.sin(z)*height/4)
}

function tan1(){
  stroke(0,255,0)
  z=x/(width/24)
  return (Math.tan(z)*height/4)
}

function cos1(){
  stroke(0,0,255)
  z=x/(width/24)
  return (Math.cos(z)*height/4)
}