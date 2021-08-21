function list(names){
    return names.reduce(function (prev, current, index, array) {
        if (index === 0) {
            return current.name;
        } else if (index === array.length - 1) {
            return `${prev} & ${current.name}`;
        } else {
            return `${prev}, ${current.name}`;
        }
    }, '');
}

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(list([]));
