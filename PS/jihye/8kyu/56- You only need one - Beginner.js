const check = (arr, x) => {
    return arr.some(v => v === x);
}

console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
