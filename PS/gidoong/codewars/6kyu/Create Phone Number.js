/* 
	input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
	output = "(123) 456-7890"
*/

function createPhoneNumber1(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

function createPhoneNumber2(numbers){
  const a = numbers.slice(0, 3)
  const b = numbers.slice(3, 6)
  const c = numbers.slice(6)
  return `(${a.join('')}) ${b.join('')}-${c.join('')}`
}

/*
	what i learn

	1. making format string first makes things much easier.

*/
