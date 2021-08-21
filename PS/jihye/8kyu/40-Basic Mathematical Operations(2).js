const basicOp = (operation, num1, num2) => {
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default:
            return 'Operation must be one of + - * /';
    }
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('/', 49, 7));
