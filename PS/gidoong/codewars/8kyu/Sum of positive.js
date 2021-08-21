// 숫자 배열을 받고 양수의 합을 리턴, 양수가 없으면 0을 리턴.

function positiveSum(arr) {
  let sum = 0
  for (const x of arr) {
    (x>0)?sum+=x:null
  }
  return sum
}

const positiveSum = (arr) => 
	arr.reduce((acc, x) => acc + ((x>0) ? x : 0), 0)

/* 배운 것

	1. 삼항연산자를 사용할 때 괄호를 신경써서 사용하자!
		acc + x>0 ? x : 0
		^ 이렇게 하면 안됨.
		acc + (x>0) ? x : 0
		^ 이래도 안됨
		acc + (x>0 ? x: 0)
		^ 이래야 됨
	2. 너무 단축해서 쓰려고 해도 가독성 떨어짐. 길어지면
		{} 쓰고 return 명시해주자
*/
