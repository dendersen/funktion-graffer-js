function pointDrawMulty(id){
  let TT =true
  for(let i  = 0; i!=2;i++){
    y = calculate[id](TT)
    pointDraw(0,false)
    TT=false
  }
}



function MultyFunk(Positive){
  let t
  let T
  z = x
  //t=+-sqrt(-x^2+2*X*centerX+r^2-x^2) "runs as both positive and negative"
  //T=centerY "a constant not affected by positivie negative change"
  
  t=Math.sqrt(-Math.pow(z,2)+2*z*100+20000)
  T=100
  
  if(Positive) return T+t
  else return T-t
}