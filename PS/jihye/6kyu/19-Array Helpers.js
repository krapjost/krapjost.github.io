let numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function() {
    return this.map(a => a*a);
}

Array.prototype.cube = function() {
    return this.map(a => a*a*a);
}

Array.prototype.average = function() {
    let sum = 0;
    this.forEach(v => {
        sum += v;
    })
    return sum/this.length
}

Array.prototype.sum = function() {
    return this.reduce((a, b) => (a+b), 0);
}


Array.prototype.even = function() {
    return this.filter(v => !(v % 2))
}


Array.prototype.odd = function() {
    return this.filter(v => v % 2)
}

console.log(numbers.sum([1, 2, 3, 4, 5]));
console.log(numbers.square([1, 2, 3, 4, 5]));
console.log(numbers.cube([1, 2, 3, 4, 5]));
console.log(numbers.average([1, 2, 3, 4, 5]));
console.log(numbers.even([1, 2, 3, 4, 5]));
console.log(numbers.odd([1, 2, 3, 4, 5]));
