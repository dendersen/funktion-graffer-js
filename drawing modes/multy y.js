function pointDrawMulty(id){
  let TT =true
  for(let i  = 0; i!=2;i++){
    y = calculate[id](TT)
    pointDraw()
    TT=false
  }
}



function MultyFunk(Positive){
  this.t
  this.T
  this.z = x
  //t=+-sqrt(-x^2+2*X*centerX+r^2-x^2) "runs as both positive and negative"
  //T=centerY "a constant not affected by positivie negative change"
  
  this.t=Math.sqrt(-Math.pow(this.z,2)+2*this.z*100+20000)
  this.T=100
  
  if(Positive) return this.T+this.t
  else return this.T-this.t
}