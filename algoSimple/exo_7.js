
const numbers = [5, -3, 12, -7, 8, 0];
let pos=[];
let neg=[];

for(n=0; n<numbers.length; n++){
    if(numbers[n] >= 0){
        pos.push(numbers[n]);
    }else{
        neg.push(numbers[n]);
    };
}

console.log(pos);
console.log(neg);