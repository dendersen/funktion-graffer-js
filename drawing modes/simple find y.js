

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
    if(runNumber>20){
    x+=width/(runNumber*density*30)
    }else{
      x+=width/((Math.pow(runNumber,2)*density))
    }
  }else{
    x=-(width/2)
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
  z=x/100
  return (Math.sin(z)*100)
}

function tan1(){
  z=x/100
  return (Math.tan(z)*100)
}

function cos1(){
  z=x/100
  return (Math.cos(z)*100)
}