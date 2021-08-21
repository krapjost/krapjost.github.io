function goodVsEvil1(good, evil){
  const gv = {0:1,1:2,2:3,3:3,4:4,5:10}
  const ev = {0:1,1:2,2:2,3:2,4:3,5:5,6:10}
  
  const ga = good.split(' '), ea = evil.split(' ');
  
  let es = 0, gs =0;
  for (let i=0; i < ea.length; i++){
    if (ea[i]>0){
      es += ev[i]*ea[i]
    }
  }
  for (let i=0; i < ga.length; i++){
    if (ga[i]>0){
      gs += gv[i]*ga[i]
    }
  }
  if (gs===es) {
    return 'Battle Result: No victor on this battle field'
  }
  if (gs > es) {
    return 'Battle Result: Good triumphs over Evil'
  } else {
    return 'Battle Result: Evil eradicates all trace of Good'
  }
}

function goodVsEvil2(good, evil) {
  const getWorth = ( side, worth ) => side.split(' ')
  .reduce((acc, v, i) => acc + (worth[i] * v), 0);

  const result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil1('1 1 1 1 1 1', '1 0 0 3 4 0 0'))
console.log(goodVsEvil2('1 1 1 1 1 1', '1 0 0 3 4 0 0'))
