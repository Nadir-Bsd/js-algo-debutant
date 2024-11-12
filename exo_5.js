const word = "pour quoi";
const chars = word.split('');
let n = 0;

for(i = chars.length; i>0; i--){
    if(chars[i-1] === "a"||chars[i-1] === "e"||chars[i-1] === "i"||chars[i-1] === "o"||chars[i-1] === "u"){
        n++;
    }
};
console.log(n);
