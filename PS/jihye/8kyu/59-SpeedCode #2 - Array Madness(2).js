const arrayMadness = (a, b) => {
    let mapA = a.map(v => v ** 2);
    let mapB = b.map(v => v ** 3);

    let sumA = mapA.reduce((acc, cur) => (acc += cur), 0);
    let sumB = mapB.reduce((acc, cur) => (acc += cur), 0);


    return sumA > sumB ? true : false;

    console.log('1', mapA);
    console.log('2', mapB);
}
console.log(arrayMadness([4,5,6],[1,2,3]));
