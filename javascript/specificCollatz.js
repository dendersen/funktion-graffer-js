let first = true

function specificCollatz(){
  if (first){ 
    pickPoint.show()
    first = false
  }
}

var pickPoint

function specificSetup(){
  pickPoint = createSlider(0, 10000, 0, 1)
  pickPoint.position(width/2-10, 0)
  pickPoint.style("width",String(width/2-height/40+"px"))
  pickPoint.style("height",String(height/16+"px"))
  pickPoint.addClass("sliderSpec")
  pickPoint.hide()
}