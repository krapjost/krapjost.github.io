function isPangram(str){
    str = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
