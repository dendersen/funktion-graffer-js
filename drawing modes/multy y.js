function PointDrawMulty(x,y){
  let TT =true
  for(let i  = 0; i!=2;i++){
    y = this.Funk(x,TT)
    //draws lines on x and y for drawn point
    stroke(colR, colG, colB)
    point(x+width/2,height/2)
    point(width/2,-y+height/2)
    strokeWeight(LI)
    stroke(0)
    
    stroke(255)
    strokeWeight(1)
    point(x+width/2,-y+height/2)
    TT=false
  }
}

function MultyFunk(z,Positive){
  let t
  let T
  
  //t=+-sqrt(-x^2+2*X*centerX+r^2-x^2) "runs as both positive and negative"
  //T=centerY "a constant not affected by positivie negative change"
  
  t=Math.sqrt(-Math.pow(z,2)+2*z*100+20000)
  T=100
  
  if(Positive) return T+t
  else return T-t
}