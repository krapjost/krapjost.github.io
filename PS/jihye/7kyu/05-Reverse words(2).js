function reverseWords(str) {

    let length = str.split(' ').length;
    let splited = str.split(' ');
    let result = [];

    for (let i = 0; i < length; i++) {
        let reversed = splited[i].split('').reverse();
        result += reversed.join('')+' ';
    }
    return result.trim();
}

const str = "olleh !dlrow";
console.log(reverseWords(str));
