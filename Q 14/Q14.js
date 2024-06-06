function findCommonElements(arr1, arr2) {
    
    let smallArr = arr1.length >= arr2.length ? arr2 : arr1
    let largeArr = arr1.length >= arr2.length ? arr1 : arr2

    let similarVal=[]

    for (let i = 0; i < smallArr.length; i++) {
        
        if (largeArr.includes(smallArr[i])) {
            similarVal.push(smallArr[i])
        }
        
    }
    return similarVal;
}
console.log(findCommonElements([1, 2, 3], [3, 4, 5]));