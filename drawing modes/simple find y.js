

function pointDrawSimple(){ //makes a point showing where is currently being drawn
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

function pointMoveSimple(){
  if(x<width/2){
    if(runNumber>20){
    x+=width/(runNumber*density*20)
    }else{
      x+=width/((runNumber/2)*(density*2))
    }
  }else{
    x=-(width/2)-yONE
    colorControl()
  }
  y = simpleFunk(x)
}

function simpleFunk(z,DNT0,DNT1,DNT2){
  if(DNT0 == null){
    let DNT0=true
  }
  if(DNT1 == null){
    let DNT1=true
  }
  if(DNT2 == null){
    let DNT2=true
  }

  let result
  //z = z
  result=(Math.sqrt(((Math.cos(z*Math.PI)/Math.sin(z))/Math.tan(z*z))))*
  (height/50)-(height/2)+(height/40)
  //result=Math.tan(z)*10*(Math.sin(z))
  //result = z
  if(DNT0 && DNT1 && DNT2) {
    simpleFunk(result,false,true,true)
  }
  if(DNT1 && DNT2) {
    simpleFunk(result,false,false,true)
  }
  if(DNT2) {
    simpleFunk(result,false,false,false)
  }
  return(result)
}