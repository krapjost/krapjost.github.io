String.prototype.toJadenCase = function () {

    let result = this.split('');
    for (let i = 0; i < result.length; i++) {
        if (i === 0) {
            result[i] = result[i].toUpperCase();
        } else if (result[i] === ' ') {
            result[i+1] = result[i + 1].toUpperCase();
        }
    }
    return result.join('');
};
str = "how can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

// "How Can Mirrors Be Real If Our Eyes Aren't Real"
