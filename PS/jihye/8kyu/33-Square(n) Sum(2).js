function squareSum(numbers){
    return numbers.reduce((sum, n) => sum + (n*n), 0)
}

console.log(squareSum([0, 3, 4, 5]));
