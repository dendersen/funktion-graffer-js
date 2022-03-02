let first = true

function specificCollatz(){
  background(backgroundShade)
  pickPoint.show()
  savePoint.show()
  stroke(255,0,0)
  printSave()
  try{
    stroke(0,255,0)
    CollatzConjectureMid(0,int(pickPoint.value()))
    errorStop = true
  }catch(err){
    console.log("empty")
    errorStop = false
  }
  drawText(true)
}


let errorStop = true
const saved = []

function printSave(){
  if(saved.length<1) return
  for(let i = 0; i < saved.length; i++){
    CollatzConjectureMid(0,saved[i])
  }
}

function saveRun(){
  if(errorStop){
    for(let i = 0; saved.length; i++){
    if(saved[i == pickPoint.value()]){
      console.log("value already exists")
      return
    }
    }
    saved[saved.length] = int(pickPoint.value())
  }
}

var pickPoint
var savePoint

function specificSetup(){
  pickPoint = createInput("100", "number")
  pickPoint.position(width/2-10, 0)
  pickPoint.style("width",width/2-height/40+"px")
  pickPoint.style("height",height/16+"px")
  pickPoint.style("font-size",height/35+"px")
  pickPoint.hide()

  savePoint = createButton("save current graff")
  savePoint.style("font-size", height/35+"px")
  savePoint.size(width/8, height/16)
  savePoint.position(width-width/7, height/4)
  savePoint.mousePressed(saveRun)
  savePoint.hide()
}

