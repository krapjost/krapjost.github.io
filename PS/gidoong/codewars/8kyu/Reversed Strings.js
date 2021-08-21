function solution1(str){
  let arr = []
  let res = ""
  for (let i = 0 , l = str.length-1; i<=l; l--){
    arr.push(str[l])
    res += arr.pop()
  }
  return res 
}

function solution2(str){
  return str.split("").reverse().join("")
}

console.log(solution1("reverse me"))
console.log(solution2("reverse me"))
