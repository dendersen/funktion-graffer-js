let first = true

function specificCollatz(){
  pickPoint.show()
  try{
    CollatzConjectureMid(int(pickPoint.value()) + (width / 2), 0)
  }catch(err){
    console.log("empty")
  }
}


var pickPoint

function specificSetup(){
  pickPoint = createInput("1", "number")
  pickPoint.position(width/2-10, 0)
  pickPoint.style("width",width/2-height/40+"px")
  pickPoint.style("height",height/16+"px")
  pickPoint.style("font-size",height/35+"px")
  pickPoint.hide()
}

