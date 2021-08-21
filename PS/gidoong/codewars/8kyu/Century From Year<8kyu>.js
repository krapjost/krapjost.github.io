// 년도를 받고 세기를 리턴한다.
// Given a year, return the century it is in.

function century1 (year) {
  return (year + 99) / 100 | 0;
}

const century2 = (y) => Math.ceil(y/100)

/* 배운 것

	1. 비트단위 논리합 '|' 연산자, 비트단위 연산에 익숙해지고 싶다. 아직 잘 모르겠음.
	2. Math.round는 반올림, Math.ceil은 주어진 수보다 크거나 같은 수 중 가장 작은 정수를 반환한다.

*/
