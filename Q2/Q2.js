const numbers = [1, 2, 3, 4, 5, 6];
let a=1;
let evenNumbers =[];
while (a < (numbers.length+1)) {
    if (numbers[a-1]%2 ==0) {
        evenNumbers.push(numbers[a-1])       
    }

    a++
}

console.log(evenNumbers)