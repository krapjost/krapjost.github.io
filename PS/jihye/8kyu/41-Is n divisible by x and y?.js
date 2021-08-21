function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    }
    return false;
}

console.log(isDivisible(3, 3, 4));
