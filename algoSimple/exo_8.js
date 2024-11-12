const numbers = [5, 3, 12, 7, 8, 0];
let result = numbers[0];

for(i=1; i<numbers.length; i++){
    if(result < numbers[i]){
        result = numbers[i];
    };
};
console.log(result);