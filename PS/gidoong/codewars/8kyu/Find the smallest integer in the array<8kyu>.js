// 숫자 배열을 받고 가장 작은 숫자를 리턴 ( 음수 인정 )

//Time: 861ms Passed: 2 Failed: 0
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Time: 915ms Passed: 2 Failed: 0
const SmallestIntegerFinder = Function;
SmallestIntegerFinder.prototype.findSmallestInt = (a) => Math.min(...a)

/* 배운 것

	1. prototype에 직접 달아줘도 class 문법과 동일하게 동작하는 것 같다. (확실하지 않음)

*/
