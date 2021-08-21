/*
	1. 2차 배열을 인자로 받고 1차 배열로 푼다.
	2. 배열을 내림차순으로 정렬.
	3. '>' 를 구분문자로 하여 문자열로 변환.

	eg.
	bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
*/


// Time: 694ms Passed: 103 Failed: 0
function bigToSmall_1(arr) {
	return [].concat(...arr).sort((a,b)=>b-a).join('>')
}

// Time: 1323ms Passed: 103 Failed: 0
function bigToSmall(arr){
  return arr
    .reduce((acc, x)=> acc.concat(x), [])
    .sort((a,b)=>b-a)
    .join('>')
}

/* 배운 것

	1. [].flat() 메소드는 node 11 이상부터 가능
	2. sort 메소드 b-a 이면 내림차, a-b 오름차
	3. decomposition syntax
		console.log(...arr)
*/
