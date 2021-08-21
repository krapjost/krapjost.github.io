// 문자열 공백 제거

const noSpace1 = str => str.replace(/\s/g, '')

function noSpace2 (str) {
  let newStr = ''
  for(const t of str) {
    if (t !== ' ') newStr += t
  }
  return newStr
}

/* 배운 것

	1. regex에서 (space) \s는 공백문자, \S는 공백문자가 아닌 것.
	2. 마찬가지로 (digit) \d는 숫자, \D는 숫자 아닌 것.
	3. trim(' ')은 문자열의 양끝만 정리해준다.
*/
