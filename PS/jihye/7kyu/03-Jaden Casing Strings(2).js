String.prototype.toJadenCase = function () {
    let result = this.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(' ');
    return result;
};
str = "how can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

// "How Can Mirrors Be Real If Our Eyes Aren't Real"
