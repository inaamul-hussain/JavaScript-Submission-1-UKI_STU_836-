const strings = ["hello", "", "world", "", "javascript"];
let a=0;

while (a < (strings.length)) {
    if (strings[a] == "") {
       strings.splice(a,1)      
    }
    a++ 
}
console.log(strings);
