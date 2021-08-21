/*
	space is one length unit;
		get the area of given triangle

	Example

	.
	.      .  
	.      .       .      ---> should return 2.0

	.
	.      .  
	.      .       .     
	.      .       .      .      ---> should return 4.5

*/

// My Solution
function tArea(tStr) {
  const arr = tStr.split('\n');
  const side = arr[arr.length-2].match(/\s/g).length
  return side*side/2
}

// Best Practice
function tArea(tStr) {
  const side = tStr.split('\n').length - 3
  return (side * side) / 2
}

/*
	배운 것

	1. 생각을 좀 더 하자~
*/
