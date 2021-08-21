const countBy = (x, n) => {
    let arr = [];
    let result;

    for (let i = 1; i <= n; i++) {
        result = x*i;
        arr.push(result);
    }
    return arr;
}


console.log(countBy(1, 10));
console.log(countBy(2, 5));
