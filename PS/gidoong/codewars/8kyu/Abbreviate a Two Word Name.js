function firstLetterOf(arr, index) {
  return arr[index][0].toUpperCase()
}
function abbrevName(name){
  const arr = name.split(' ')
  return `${firstLetterOf(arr, 0)}.${firstLetterOf(arr, 1)}`
}
