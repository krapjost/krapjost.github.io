function sortByLength (array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length; j++) {
            if (array[i].length > array[j].length) {
                let temp;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
