function factorial(n){
    if(n==0){
        return (n)
        print(n)
    }else if(n>0){
        return(n*factorial(n-1))
    }else if(n<0){
        return(n*factorial(n+1))
    }
}