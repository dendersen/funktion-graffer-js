

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
  y = SimpleFunk(x)
}

function SimpleFunk(CC){

  this.z = CC/10
  //result=(Math.sqrt(((Math.cos(this.z*Math.PI)/Math.sin(this.z))/Math.tan(this.z*this.z))))*(height/50)-(height/2)+(height/40)
  result=Math.sqrt(Math.tan(this.z)*10*(Math.sin(this.z)))
  //result = this.z 
  //result = d(this.z)

  return(result)
}