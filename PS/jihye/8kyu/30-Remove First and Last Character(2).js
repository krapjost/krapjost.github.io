function removeChar(str){
    return str.slice(1, -1);
};

console.log(removeChar('eloquent'));


// Note: Negative index -1 is equivalent to str.length-1 in slice method.
