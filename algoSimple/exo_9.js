const word = "bonjour";
let array = word.split('');
let array2 = [];

for(i=array.length-1; i>=0; i--){
    array2.push(array[i]); 
}
console.log(array2);
