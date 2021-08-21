const abbrevName = str => {
    return str.split(' ').map(i => i[0].toUpperCase()).join('.');
}

console.log(abbrevName("Jihye Byun"));
