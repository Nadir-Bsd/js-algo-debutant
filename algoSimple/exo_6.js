const phrase = "je test une phrase";
const chars = phrase.split('');
const lettres = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

for(m=0; m <= 25; m++){
    let n = 0;

    for(i=0; i<=chars.length; i++){
        if(chars[i] == lettres[m]){
            n++;
        }
    }

    console.log(`${lettres[m]}: ${n} fois`);
}