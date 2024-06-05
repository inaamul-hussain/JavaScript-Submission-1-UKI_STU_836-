const words = ["hello", "world", "javascript"];
let newWords = words.reduce((accumulator, currentvalue) => accumulator+" "+currentvalue)
console.log(newWords)