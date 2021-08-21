/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
*/

// 다른 사람의 해결법
const sumPwrs = (a, p) => a.reduce( (s, n) => s + n ** p, 0);
const arrayMadness1 = (a, b) => sumPwrs(a, 2) > sumPwrs(b, 3);

// 나의 해결법
function arrayMadness2(a, b) {
  const sumSquareA = a.reduce((acc,cur)=>acc+cur**2,0)
  const sumCubeB = b.reduce((acc,cur)=>acc+cur**3,0)
  return sumSquareA>sumCubeB
}

// 배운 것
/*
1. squares, cubes라는 네이밍은 2승하면 사각형, 3승하면 큐브가 나와서였다. 영어 이름은 직관적으로 붙은 게 많은 듯!
2. reduce에 초깃값을 넣고 안 넣고의 차이. 0을 안줘도 될 줄 알았는데 아니었다. 초기값을 명시적으로 주지 않으면 배열의 첫번째 원소가 초깃값이 된다. 빈 배열에서는 초기값 없을 시 에러.
3. 함수형 프로그래밍은 함수를 나눌 수 없을 때까지 나누는 것, 재사용성의 극대화, 다른 사람의 코드를 보니 너무 깔끔하다.
*/

console.log((arrayMadness1([4,5,6],[1,2,3]))
console.log((arrayMadness2([4,5,6],[1,2,3]))
