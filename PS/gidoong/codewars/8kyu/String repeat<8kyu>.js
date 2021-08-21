// 숫자와 문자열을 받고 숫자만큼 문자열 반복

function repeatStr (n, s) {
  let newS = ''
  for (i=0; i<n; i++) newS += s;
  return newS
}

const repeatStr = (n, s) => s.repeat(n)

/*배운 것
	1. for문도 {} 생략 가능
	2. string repeat 메소드
*/
