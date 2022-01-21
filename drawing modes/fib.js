fib = []
parseInt(fib [0] = 0+0)
parseInt(fib [1] = 1+0)

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function fibcalc(NUM){
  if(fib.length<=NUM){//close to accurate up to 80, then looses accuracy until 101 where it stops calculating
    fib [fib.length] = parseInt(parseInt(fib[fib.length-1]) + parseInt(fib[fib.length-2]))
    console.log(fib.length-1, fib[fib.length-1])
    wait (1)
    fibcalc()
    return(fib[fib.length-1])
  }else {return(fib[Math.floor(NUM)])}
}