function adjacentElementsProduct(inputArray) {
    let greatestProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i<inputArray.length-1;i++) {
        greatestProduct = Math.max(greatestProduct, inputArray[i] * inputArray[i+1]);
    }
    return greatestProduct
}
