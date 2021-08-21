/*
	In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

	"A" -> "T"
	"T" -> "A"
	"G" -> "C"
	"C" -> "G"

	Example		

	DNAStrand ("ATTGC") // return "TAACG"
	DNAStrand ("GTAT") // return "CATA" 
*/

//My solution
function DNAStrand(dna){
   return dna.split("").reduce((acc, cur) => {
    if (cur === "A") acc += "T"
    if (cur === "T") acc += "A"
    if (cur === "G") acc += "C"
    if (cur === "C") acc += "G"
    return acc
  }, "")
  
}

//Best Practice
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

/*

	배운 것

	1. regex에서 .은 줄바꿈 문자를 제외하고 모든 문자를 매치
	2. Object를 사용하는 방법
		내가 작성한 함수에서는 문자열을 배열로 바꾸고 reduce로
		일일이 순회하면서 그 안에서 조건문도 일일이 비교해야 한다.
		best practice 함수에서는 global regex로 변경할 모든 문자열을
		한 번에 찾고* Object에 key로 순회 없이 접근하여 변경한다.
			*정정* regex global은 순회를 하긴하지만 js for loop보다 빠름.
		그리고 나라면 const로 따로 선언했을 것 같은데 여기서는
		해당 데이터를 사용하는 함수에 체인으로 달아줌으로서 코드를 깔끔하고
		읽고 이해하기 쉽게 만들었다.

		> 그 외의 장점이 있다면 알려주셨으면 좋겠습니다.
		> 뭔가 다른 이유도 있을 것 같은데 아직은 잘 모르겠습니다.	


	3. string에 regex를 다는 것이 array의 forEach와 같다는 댓글을 보아서 벤치마크를 검색해보았다. 결과는 아래와 같은데 regex가 꽤 큰 격차로 더 좋은 성능을 보인다.

	[regex 와 forloop 벤치마크 비교](https://www.measurethat.net/Benchmarks/Show/7532/0/regex-vs-for-loop)
*/
