const digitize = n => n.toString().split('').reverse().map(v => v*1);

console.log(digitize(35231));
