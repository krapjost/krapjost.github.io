function isValidIP1(str) {
  function reducer(acc, v){
    const n = Number(v)
    if (v===n.toString()&&n<256&&n>=0){
      acc.push(n)  
    }
    return acc
  }
  let result = str.split('.').reduce(reducer, []).length === 4
  return result
}

function isValidIP2(str) {
  const rgx = /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/
  return rgx.test(str)
}

console.log(isValidIP1("asd.123.123.-123"))
console.log(isValidIP2("\n123.123.123.123"))
