function filter_list(l) {

    return l.filter(e => typeof e == 'number');
}


console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 2, '1', '123', 123]));
