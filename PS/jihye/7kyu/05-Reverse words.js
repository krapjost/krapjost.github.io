function reverseWords(str) {
    let result=str.split(" ")
    for (let i=0; i<result.length; i++){
        result[i]=result[i].split("").reverse().join("");
    }
    return result.join(" ")
}

const str = "This is an example!";
console.log(reverseWords(str));
