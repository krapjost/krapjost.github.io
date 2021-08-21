function countSheeps(arr) {
    return arr.filter(Boolean).length;
}

console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));


// NOTE: 배열에서 undefined 혹은 false 값을 제거 => array.filter(Boolean)
