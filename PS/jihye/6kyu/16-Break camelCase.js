// complete the function
function solution(string) {
    let arr = string.split('');
    for (const e in arr) {
        if (arr[e] >= 'A' && arr[e] <= 'Z') {
            arr[e] = (' '+arr[e]);
        }
    }

    const result = arr.join('');

    return result;
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution(""));
