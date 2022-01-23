function speedManager{
  switch(calcFrame){
  case calcFrame < 50:
    rerun -=1
  break
  case calcFrame > 55:
    rerun += 1
  }
}