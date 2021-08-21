function find_average(array) {
    return array.reduce((result, current) => result + current) / array.length;
}

console.log(find_average([1, 2, 3]));
