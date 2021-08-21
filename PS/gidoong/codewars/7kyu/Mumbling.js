/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
  return s.split("").reduce((acc,char,idx)=>{
    acc.push(char.toUpperCase() + char.toLowerCase().repeat(idx))
    return acc
  }, []).join("-")
}

/*
	배운 것

	1. string.reapeat(count)
	2. 누산기 초기값을 배열로 두고 push 할 때 바로 리턴하면 안됨.
*/
