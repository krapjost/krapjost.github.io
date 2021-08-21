function rowSumOddNumbers(n) {
    let start = n * (n-1) + 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += start + (i * 2);
    }
    return sum;
}

console.log(rowSumOddNumbers(3));
