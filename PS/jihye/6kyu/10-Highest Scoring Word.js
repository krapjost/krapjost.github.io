function high(x){
    let highestScore = 0;
    let highestWord = '';
    const words = x.split(' ');

    for (let i = words.length - 1; i >= 0; i--) {

        const word = words[i];
        let wordScoreCounter = 0;

        word.split('').forEach(letter => {
            wordScoreCounter = wordScoreCounter + (letter.charCodeAt(0) - 96);
        })

        console.log(word, wordScoreCounter);

        if (wordScoreCounter >= highestScore) {
            highestScore = wordScoreCounter;
            highestWord = word;
        }
    }

    return highestWord;
}

console.log(high('aaa b c d'));
