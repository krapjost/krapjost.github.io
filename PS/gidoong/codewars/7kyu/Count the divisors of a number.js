let bf, af, ms;

const getDivisorsCnt1 = (n) => {
  let i = n, c = 0;
  while (i>0){
    if (n % i === 0) c++; i--;
  }
  return c;
}

function getDivisorsCnt2(n){
    let cnt = 1
    for (let d=n/2; d>=1; d--){
      if (Number.isInteger(n/d)){
        cnt ++
      }
    }
  return cnt
}

bf = Date.now()
console.log(getDivisorsCnt1(50000))
af = Date.now()
ms = new Date(af - bf).getMilliseconds()
console.log("time took :", ms, "ms")

bf = Date.now()
console.log(getDivisorsCnt2(50000))
af = Date.now()
ms = new Date(af - bf).getMilliseconds()
console.log("time took :", ms, "ms")
