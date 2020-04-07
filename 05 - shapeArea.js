function shapeArea(n) {
    let x=0,c=1,i=2;    
    while(i<=n){
        x=(4*(i-1))+x;
        i++;
    }
    return x+1;
}
