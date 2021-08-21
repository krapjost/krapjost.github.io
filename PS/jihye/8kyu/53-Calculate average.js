function find_average(array) {
    let sum = 0;

    let len = array.length;
    for (let i = 0; i < len; i++) {
        sum += array[i];
    }

    return sum / len;
}

console.log(find_average([1, 2, 3]));
