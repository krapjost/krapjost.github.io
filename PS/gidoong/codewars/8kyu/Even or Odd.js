// 숫자를 인자로 받고 홀수면 "Odd" 아니면 "Even" 리턴

const even_or_odd1 = n => n%2 ? 'Odd' : 'Even'


function even_or_odd2 (number) {
  return (number%2) ? 'Odd' : 'Even'
}

/* 배운 것

	1. 삼항연산자에 괄호는 쓰는 게 가독성에 좋을 것 같다.
	2. 이렇게 간단한 건 화살표 함수가 좋을 듯!
	3. 하지만 화살표 함수에 괄호쓰면 함수 안에 함수인지 헷갈린다.
*/
