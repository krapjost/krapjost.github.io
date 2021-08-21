const findOdd = (A) => A.reduce((a, b, i) => {
	console.log(`${i}:: a,b : ${a},${b}; a ^ b : ${a^b}`); 
	return a^b}
);

function findOdd2(A) {
  const result = A.sort().reduce((acc,cur,i)=>{acc.push(cur);
  if (acc.length > 0 && acc[acc.length-2] - cur === 0){
    acc[acc.length-2]="", acc[i]=""
  }
  return acc
  },[])
  return result.filter(x=>Number.isInteger(x))[0]
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd2([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
