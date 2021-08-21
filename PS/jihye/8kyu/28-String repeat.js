function repeatStr (n, s) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "ha "));
