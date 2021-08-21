function high(x){
    return x.split(' ').reduce((accum, current) => {
        return score(current) > score(accum) ? current : accum;
    })
}

function score(word) {
    return word.split('').reduce((accum, current) => {
        return accum + (current.charCodeAt() - 96)
    }, 0);
}

console.log(high('take me to semynak'));
