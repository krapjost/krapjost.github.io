/*
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".
*/


// My Solution
function encode(string) {
  return ["a","e","i","o","u"].reduce((acc, cur, idx) => {
     return acc.replace(RegExp(cur, "g"), idx+1)
  }, string)
}

function decode(string) {
  return ["a","e","i","o","u"].reduce((acc, cur, idx) => {
    return acc.replace(RegExp(idx+1, "g"), cur)
  }, string)
}

// Best Practice
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

/*
	배운 것

	1. string.replace 두번째 param에 숫자를 넣어도 알아서 문자가 됨.
	2. RegExp 두번째 param에 "g", "i" 등 플래그
	3. 반복 안 돌려도 됐었구나... 다음에는 charAt과 indexOf를 써보자.
*/
