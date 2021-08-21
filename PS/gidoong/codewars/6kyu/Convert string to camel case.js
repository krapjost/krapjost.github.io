function toCamelCase1(str){
  return str.replace(/([-_])+\w/ig, function(match) { 
    return match.charAt(match.length - 1).toUpperCase(); 
  });
}

function toCamelCase2(str){
  if (!str) {
    return ""
  }
  let result
  if (/[a-z]/.test(str[0])){
    str.includes('-')
    ? (()=>{
      result = str.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
      result = result.replace(result[0], result[0].toLowerCase())
    })()
    : (()=>{
      result = str.split('_').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
      result = result.replace(result[0], result[0].toLowerCase())
    })()
  } else {
    str.includes('-')
    ? result = str.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
    : result = str.split('_').map(s=>s[0].toUpperCase()+s.slice(1)).join('')
  }
    return result;
}


console.log(toCamelCase1('camel--case--Me'))
console.log(toCamelCase2('Camel__case__me'))
