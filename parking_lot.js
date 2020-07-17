let carAmount = 0;
const carAmountMax = 5;

document.getElementById("carinbutton").onclick = addCar;
document.getElementById("caroutbutton").onclick = delCar;

//차 추가
function addCar() {
  carAmount += 1;
  return carAmount;
  function printCurIn() {
    if(carAmount==carAmountMax){
      alert ("만차입니다.")
    }else if (carAmount==4) {
      alert ("주차 1대 가능.")
    }else if (carAmount==3) {
      alert ("주차 2대 가능.")
    }else{
      alert ("환영합니다.")
    }
  }
}

//차 제거
function delCar() {
  carAmount -= 1;
  return carAmount;
  function printCurOut() {
    if(carAmount==carAmountMax-1){
      alert ("4대 안녕히 가세요.")
    }else{
      alert ("안녕히 가세요.")
    }
  }
}
