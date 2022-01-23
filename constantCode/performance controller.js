
function speedManager(){
  console.log("speed")
  try{
  let Frame = Math.floor(frameRate())
    if(Frame<35){
      if(reruns >= 2){
        reruns --
        console.log ("decrease", Frame)
      }else console.log("decrease failed", Frame,reruns)
    }else if (Frame> 55){
      reruns += 5
      console.log("big increase",Frame)
    }else if (Frame > 50){
      reruns ++
      console.log ("increase",Frame)
    }else {console.log("fine",Frame)}
  } catch(err){
    console.log("performance failed")
  }
}
let performanceCheck = setInterval (speedManager,1000)
