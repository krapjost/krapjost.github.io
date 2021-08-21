function getMiddle(s)
{
    let middle = '';
    if (s.length % 2 === 0) {
        middle = s[Math.trunc(s.length/2-1)]+s[Math.trunc(s.length/2)];
    } else {
        middle = s[Math.trunc(s.length / 2)];
    }
    return middle;
}

console.log(getMiddle("Test"));
console.log(getMiddle("A"));
console.log(getMiddle("testing"));
