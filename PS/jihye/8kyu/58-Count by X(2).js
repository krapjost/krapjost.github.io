const countBy = (x, n) => Array.from({length: n}, (e, i) => (i + 1) * x);


console.log(countBy(1, 10));
console.log(countBy(2, 5));
