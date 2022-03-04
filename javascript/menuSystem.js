var menuOpen

function button1(){
  menuOpen = createButton("menu")
  menuOpen.style("font-size", buttonMath(true))
  menuOpen.size(width/16, height/16)
  menuOpen.position(0, 0)
  menuOpen.mousePressed(openMenu)
}

function openMenu(){
  modeStore = mode
  mode = "menu"
}

var buttonStandard
var buttonTreeV2
var buttonSpecific
var buttonTree
var buttonTriangels //120
var buttonhexagons //60

var mode = "standard"

function buttonMath(hello){
  if (hello) return(String(width/46+"px"))
  return(String(width/23+"px"))
}

function menuChanger(){
  console.log("work")
  buttonStandard = createButton("standard view")
  buttonTreeV2 = createButton("treeV2 view")
  buttonSpecific = createButton("inspect singel")
  buttonTree = createButton("Tree view")
  buttonTriangels = createButton("triangels")
  buttonhexagons = createButton("hexagons")

  buttonStandard.style("font-size", buttonMath())
  buttonTreeV2.style("font-size", buttonMath())
  buttonSpecific.style("font-size",buttonMath())
  buttonTree.style("font-size", buttonMath())
  buttonTriangels.style("font-size", buttonMath())
  buttonhexagons.style("font-size", buttonMath())

  buttonStandard.size(width/4, height/4)
  buttonTreeV2.size(width/4, height/4)
  buttonSpecific.size(width/4, height/4)
  buttonTree.size(width/4, height/4)
  buttonTriangels.size(width/4, height/4)
  buttonhexagons.size(width/4, height/4)

  buttonStandard.position(0, 0)
  buttonTreeV2.position(0, height/3)
  buttonSpecific.position(0, height/3*2)
  buttonTree.position(width/4, 0)
  buttonTriangels.position(width/4, height/3)
  buttonhexagons.position(width/4, height/3*2)

  buttonStandard.mousePressed(mode = openStandard)
  buttonTreeV2.mousePressed(mode = openTreeV2)
  buttonSpecific.mousePressed(mode = openSpecific)
  buttonTree.mousePressed(mode = openTree)
  buttonTriangels.mousePressed(mode = openTri)
  buttonhexagons.mousePressed(mode = openHex)
}

function openTri(){
  buttonHide()
  mode = "treeTri"
  if(modeStore != mode){
    x=0
    background(backgroundShade/2)
  }
}

function openHex(){
  buttonHide()
  mode = "treeHex"
  if(modeStore != mode){
    x=0
    background(backgroundShade/2)
  }
}

function openStandard(){
  buttonHide()
  mode = "standard"
  if(modeStore != mode){
    x=-width/2
    background(backgroundShade)
    for(let i = -(width/2); i < width/2+1; i++)
    storageY [i] = undefined
    longPoint = 0
    topPoint = 0
  }
}

function openTreeV2(){
  buttonHide()
  mode = "treeV2"
  if(modeStore != mode){
    x=0
    background(backgroundShade/2)
  }
}

function openTree(){
  buttonHide()
  mode = "tree"
  if(modeStore != mode){
    x=0
    background(backgroundShade)
  }
}

function openSpecific(){
  buttonHide(true)
  mode = "specific"
  if(modeStore != mode){
    first = true
    x=-width/2
    background(backgroundShade)
  }
}

function buttonHide(CC){
  buttonStandard.hide()
  buttonTree.hide()
  buttonSpecific.hide()
  buttonTreeV2.hide()
  buttonTriangels.hide()
  buttonhexagons.hide()
  if(!CC) {
    pickPoint.hide()
    savePoint.hide()
  }
}