function addBinary1(a,b) {
  let sum = a+b
  let result = ""
  
  while (1 < sum) {
    result += `${parseInt(sum)%2}`
    sum = sum/2
  }
  return [...result].reverse().join("")
}

function addBinary2(a,b) {
  return (a+b).toString(2)
}

console.log(addBinary1(14,39))
console.log(addBinary2(14,39))
