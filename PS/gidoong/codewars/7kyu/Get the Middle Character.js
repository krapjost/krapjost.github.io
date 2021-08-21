/*

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

//Best practice
function getMiddle(s){
  return s.slice((s.length-1)/2, s.length/2+1);
}
// or
const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1);
// or
const getMiddle = s => s.substring((s.length-1)/2, s.length/2+1);

//My solution
function getMiddle(s) {
  if (s.length % 2) {
    return s.substring(s.length/2, s.length/2+1)
  }
  return s.substring(s.length/2-1, s.length/2+1)
}

/*
	배운 것

	1. substring과 slice 모두 인자에 float이 들어오면 소숫점을 버린 int로 인식한다.

*/
