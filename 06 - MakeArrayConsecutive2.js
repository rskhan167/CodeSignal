function makeArrayConsecutive2(statues) {
    let n=statues.length;
    let i,j,key;
    for(i=0;i<n;i++){
        j=i;
        while(j>0 && statues[j-1]>statues[j]){
            key=statues[j];
            statues[j]=statues[j-1];
            statues[j-1]=key;
            j--;
        }
    }
    let a=statues[0];
    let z=statues[n-1];
    let x=(z-a)+1;
    return (x-n);
}
