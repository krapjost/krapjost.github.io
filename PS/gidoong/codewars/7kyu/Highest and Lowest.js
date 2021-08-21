/*

	Example

	highAndLow("1 2 3 4 5");  // return "5 1"
	highAndLow("1 2 -3 4 5"); // return "5 -3"
	highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

// My solution
function highAndLow(numbers){
  const sorted = numbers.split(" ").sort((a, b)=>a-b)
  return `${sorted[sorted.length-1]} ${sorted[0]}`
}

// Best Practice
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

/*

	배운 것

	1. 정확한 Math.max와 spread 연산자 사용법
		numbers split 하면 string 배열이지만 숫자로 인식해준다.

	2. parameter에 바로 재할당하는 방법
		잘 모르겠지만 변수를 새로 선언하는 것보다
		메모리 효율이 더 좋지 않을까 생각이 든다. 코드도 줄이고...

*/
