function positiveSum(arr) {
    let sum = 0;
    arr.filter(v => {
        if (v > 0) {
            sum += v;
        }
    })

    return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([]));
