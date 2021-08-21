/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

 문자열의 처음과 마지막 문자를 제거합시다.
*/

function removeChar1(str){
  let newStr = ''
  for (let i=1, l=str.length-1; i<l; i++) {
    newStr += str[i]
  }
  return newStr
};

const removeChar2 = (str) => str.slice(1, -1)

/*배운 것

	1. string도 iterable
	2. string 내장 함수 slice param1 = 순서, param2 = 역순서
*/
