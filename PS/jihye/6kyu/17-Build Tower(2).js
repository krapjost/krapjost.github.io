function towerBuilder(n) {
    return Array.from({length: n}, (v, i) => {
        const space = ' '.repeat(n - i - 1);
        return space + '*'.repeat(i + i + 1) + space;
    })
}

console.log(towerBuilder(3));
