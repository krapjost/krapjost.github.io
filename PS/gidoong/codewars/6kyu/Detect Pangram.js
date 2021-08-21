function isPangram(string){
  return [..."qwertyuiopasdfghjklzxcvbnm"]
    .every(l=>string.toLowerCase().includes(l))
}

function isPangram2(string){
  const letters = ['a','b','c','d','e','f','g',
                   'h','i','j','k','l','m','n',
                   'o','p','q','r','s','t','u',
                   'v','w','x','y','z']
  let cnt = 0
  for (let i=0; i<=letters.length; i++) {
    if (string.toLowerCase().includes(letters[i])) {
      cnt ++
    }
  }
  return cnt === letters.length ? true : false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram2("The quick brown fox jumps over the lazy dog."))
