function removeSmallest(numbers) {
    let min = 999;
    let index = 0;
    console.log(numbers.length);
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
            index = i;
        }
    }

    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i != index) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));
