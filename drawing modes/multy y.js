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

  //next two lines are about how to draw a circle
  //t=+-sqrt(-x^2+2*X*centerX+r^2) "runs as both positive and negative"
  //T=centerY "a constant not affected by positivie negative change"
  
  t=Math.sqrt(-Math.pow(z,2)+2*z*100+100000^2/*-Math.pow(z,2)*/)
  T=100
  
  if(Positive) return T+t
  else return T-t
}

function multyFunk1(CC){
  let t
  let T
  let z = x/1000

  t=Math.sqrt(Math.sin(z)*10+Math.cos(z*z))*Math.tan(z+2)
  T=5
  if(CC) return T+t
  else return t-T
}