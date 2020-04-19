function allLongestStrings(inputArray) {
    var count = 0;
    var outputArray = [];
    var big = 0;
    //console.log(inputArray[0].length);
    //console.log(inputArray.length);
    for(var i = 0; i < inputArray.length; i++){
        if(big < inputArray[i].length){
            big = inputArray[i].length;
        }
    }
    //console.log(big);
    for(var j = 0; j < inputArray.length; j++){
        if(inputArray[j].length === big){
            outputArray.push(inputArray[j])
        }
    }
    return outputArray;
}
