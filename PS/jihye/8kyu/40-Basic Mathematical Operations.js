const basicOp = (operation, num1, num2) => {
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else {
        return num1 / num2;
    }
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('/', 49, 7));
