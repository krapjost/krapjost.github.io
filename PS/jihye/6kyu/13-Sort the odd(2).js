function sortArray(array) {
    const odd = array.filter((x) => x%2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x)
}


console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));
