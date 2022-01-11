function factorial(n){
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
        m*m
    }
    return (m)
    print (m)
}

function powerAll(n,m){
    for(let i=1; i!=n; i++){
        m = m*m
    }
    return (m)
}

function sum(n){
    if(n==0){
        return (0)
    }else if(n>0){
        return(n+sum(n-1))
    }else if(n<0){
        return(n+sum(n+1))
    }
}