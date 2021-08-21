const arrayMadness = (a, b) => {
    let resultA = 0;
    let resultB = 0;
    for (let i = 0; i < a.length; i++) {
        resultA += a[i] ** 2;
    }

    for (let i = 0; i < b.length; i++) {
        resultB += b[i] ** 3;
    }

    return resultA > resultB ? true : false;

}
console.log(2 ** 3);
