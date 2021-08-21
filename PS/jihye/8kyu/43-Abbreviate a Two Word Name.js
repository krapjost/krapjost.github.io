const abbrevName = str => {
    let result = [];
    result.push(str[0]);
    result.push(".");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result.push(str[i + 1]);
            return result.join('').toUpperCase();
        }
    }
}

console.log(abbrevName("Jihye Byun"));
