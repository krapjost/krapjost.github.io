function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(v => {
        if(v) count ++;
    })

    return count;
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));
