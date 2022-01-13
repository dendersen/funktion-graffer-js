function factorial(n){
	print("factorial")
	if(n==0){
		return (1)
	}else if(n>0){
		return(n*factorial(n-1))
	}else if(n<0){
		return(n*factorial(n+1))
	}
}

function power(n){
	let m = 2
	for(let i=1; i<=n;i++){
		print("power")
		m*m
	}
	return (m)
}

function powerAll(n,m){
	for(let i=1; i!=n; i++){
		print("powerAll")
		m = m*m
	}
	return (m)
}

function sum(n){
	print("sum")
	if(n==0){
		return (0)
	}else if(n>0){
		return(n+sum(n-1))
	}else if(n<0){
		return(n+sum(n+1))
	}
}

function d(maxN,y0){
	//return m
	return 2*y0+3
}

