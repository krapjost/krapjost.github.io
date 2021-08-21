/*
	주어진 문자열에 x와 o의 수가 일치하면 true 아니면 false 리턴
	빈 문자열은 수가 일치하는 것으로 간주
*/

// best practice
function XO(str) {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length);
}

// my solution
function XO(str) {
	if (str.length === 0) return true
	const xArr = str.match(/x/ig)
	const oArr = str.match(/o/ig)
	if (xArr && oArr) {
		return xArr.length === oArr.length
	}
	return false
}

/*
	null일 때 length 오류나는 것을 &&을 사용해서 방지할 수 있구나
*/
