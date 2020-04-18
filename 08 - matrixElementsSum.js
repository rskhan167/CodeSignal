function matrixElementsSum(matrix) {
    var cost = 0;
    /*var row,col;
    row=console.log(matrix.length);
    col=console.log(matrix[0].length);  */
    var key;
    for(var k = 0; k < matrix[0].length; k++){
        cost=cost+matrix[0][k];
        if(matrix[0][k] === 0){
            key = k;
        }
    }
    //console.log(cost);
    var totalcost = 0;
    for(var i = 1; i < matrix.length; i++){
        for(var j = 0; j < matrix[i].length; j++){
            if(matrix[i][j]!=0 && matrix[i-1][j]!=0 && j!=key){
                totalcost = totalcost + matrix[i][j];
            }
        }
    }
    //console.log(totalcost);
    return cost + totalcost;
}
