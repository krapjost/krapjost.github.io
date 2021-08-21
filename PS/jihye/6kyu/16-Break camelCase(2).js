function solution(string) {
    return string.split('').map(function (e) {
        if (e === e.toUpperCase()) {
            e = ' ' + e
        }
        return e
    }).join('');
}



console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution(""));
