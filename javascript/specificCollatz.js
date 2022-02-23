let first = true

function specificCollatz(){
  if (first){ 
    pickPoint.show()
    first = false
  }
}

var pickPoint

function specificSetup(){
  pickPoint = createInput("number to inspect", "number")
  pickPoint.position(width/2-10, 0)
  pickPoint.style("width",width/2-height/40+"px")
  pickPoint.style("height",height/16+"px")
  pickPoint.style("font-size",height/35+"px")
  pickPoint.hide()
}

