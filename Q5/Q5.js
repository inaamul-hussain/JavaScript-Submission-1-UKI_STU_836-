
const array = [4, 'hello', 3, true, 'Uki', 5];

let newArray = [];

function sqr(i) {
    if (typeof i == "number") {
        return i * i;
    } 
    else{
        i=0
    }
    return i;
}

for (let i = 0; i < array.length; i++) {
    let squaredValue = sqr(array[i]);
    newArray.push(squaredValue);
}
let sum = newArray.reduce((accumulator, currrentvalue) => accumulator + currrentvalue, 0);
console.log(sum);
