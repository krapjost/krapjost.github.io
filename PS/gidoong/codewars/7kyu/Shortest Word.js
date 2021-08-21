/*
	단어들로 이뤄진 문자열이 주어지면 그 중 가장 짧은 단어의 길이를 리턴하라.
*/

//my first solution
function findShort(s){
	return s.split(' ').sort((a,b)=>a.length-b.length)[0].length
}

//best practice
function findShort(s){
	return Math.min.apply(null, s.split(' ').map(w => w.length));
}

//my second solution
function findShort(s){
  return Math.min(...s.split(' ').map(x=>x.length))
}

/*
	배운 것

	Math.min.apply
	apply는 공부해두면 활용도가 높을 것 같다.
	map에 전개 연산자를 넣어도 잘 동작한다.
*/
