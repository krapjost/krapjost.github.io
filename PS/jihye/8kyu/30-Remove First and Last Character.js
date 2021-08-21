function removeChar(str){
    let result = "";
    for (let i = 1; i < str.length-1; i++) {
        result += str[i];
    }
    return result;
};

console.log(removeChar('eloquent'));
