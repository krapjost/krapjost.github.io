function filter_list(l) {

    let result = [];

    for (const e in l) {

        if (l[e][0] === undefined) {
            result.push(l[e]);
        }

    }

    return result;
}


console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 2, '1', '123', 123]));
