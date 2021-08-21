multiplicationTable = function(row, col) {
    let rowArr = [];
    let colArr = [];
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            colArr.push(i * j);
        }
        rowArr.push(colArr);
        colArr = [];
    }
    return rowArr;
}

console.log(multiplicationTable(3,3));
