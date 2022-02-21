var menuOpen

function button1(){
  menuOpen = createButton("menu")
  menuOpen.size(width/16, height/16)
  menuOpen.position(0, 0)
  menuOpen.mousePressed(openMenu)
}

function openMenu(){
  modeStore = mode
  mode = "menu"
}

var buttonStandard
var buttonTree
var buttonSpecific

var mode = "standard"

function buttonMath(){
  return(String(width/23+"px"))
}

function menuChanger(){
  console.log("work")
  buttonStandard = createButton("standard view")
  buttonTree = createButton("tree view")
  buttonSpecific = createButton("inspect singel")

  buttonStandard.style("font-size", buttonMath())
  buttonTree.style("font-size", buttonMath())
  buttonSpecific.style("font-size",buttonMath())

  buttonStandard.size(width/4, height/4)
  buttonTree.size(width/4, height/4)
  buttonSpecific.size(width/4, height/4)

  buttonStandard.position(0, 0)
  buttonTree.position(0, height/3)
  buttonSpecific.position(0, height/3*2)

  buttonStandard.mousePressed(mode = openStandard)
  buttonTree.mousePressed(mode = openTree)
  buttonSpecific.mousePressed(mode = openSpecific)
}

function openStandard(){
  mode = "standard"
  buttonStandard.hide()
  buttonTree.hide()
  buttonSpecific.hide()
  if(modeStore != mode){
    x=-width/2
    background(backgroundShade)
  }
}

function openTree(){
  mode = "tree"
  buttonStandard.hide()
  buttonTree.hide()
  buttonSpecific.hide()
  if(modeStore != mode){
    x=0
    background(backgroundShade)
  }
}

function openSpecific(){
  mode = "specific"
  buttonStandard.hide()
  buttonTree.hide()
  buttonSpecific.hide()
  if(modeStore != mode){
    x=-width/2
    background(backgroundShade)
  }
}