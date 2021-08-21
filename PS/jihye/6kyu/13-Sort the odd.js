function sortArray(array) {
    let odd = [];

    for (let i = 0; i < array.length; i++) {
        if(isOdd(array[i])){
            odd.push(array[i]);

        }
    }

    odd.sort((a, b)=> a-b);

    let oddIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if(isOdd(array[i])){
            array[i] = odd[oddIndex];
            oddIndex++;
        }
    }
    return array;
}

function isOdd(n){
    if (n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));
