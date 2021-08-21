function monkeyCount(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

console.log(monkeyCount(5));
