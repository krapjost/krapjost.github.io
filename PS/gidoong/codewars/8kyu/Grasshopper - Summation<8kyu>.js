// 숫자를 받고 1부터 숫자까지의 합을 리턴

//Time: 738ms Passed: 105 Failed: 0
function summation1 (num) {
  let r = 0
  for (i=1;i<=num;i++) r+=i
  return r
}

//Time: 725ms Passed: 105 Failed: 0
const summation2 = (n) => {
  for (i=1,r=0;i<=n;i++) {
    r+=i; if (i===n) return r
  }
}

//Time: 713msPassed: 105Failed: 0
const summation3 = n => n * (n + 1) / 2;

/* 배운 것
	1. for문은 바로 리턴이 안된다.
	2. for문 안에서 리턴해도 된다.
	3. 숫자까지 증가된 모든 수의 합은 n*(n+1)/2이다.
*/
