function list(names){

    let result = '';
    let length = names.length;

    if (length >= 3) {
        for (let i = 0; i < length-2; i++) {
            result += `${names[i].name}, `
        }

        result +=`${names[length-2].name} & ${names[length-1].name}`

    } else if (length === 2) {
        result = `${names[0].name} & ${names[1].name}`
    } else if (length === 1) {
        result = `${names[0].name}`
    }
    return result;
}

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(list([]));
