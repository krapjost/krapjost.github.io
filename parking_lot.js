var carAmount = 0 ;
function addCar(){
   const carAmountMax = 5;
   if(carAmount<carAmountMax){
    carAmount ++;
   }else{carAmount=carAmountMax};
    console.log(carAmount);
    printCurIn();
    function printCurIn(){
        if(carAmount==carAmountMax){
          alert ("만차입니다.");
        }else if (carAmount==4) {
          alert ("주차 1대 가능.");
        }else if (carAmount==3) {
          alert ("주차 2대 가능.");
        }else{
          alert ("환영합니다.");
        }}};

function delCar(){
  const carAmountMin = 0;
  if (carAmount>carAmountMin){
    carAmount -= 1;
  }else{carAmount=carAmountMin};
    console.log(carAmount);
    printCurOut();
      function printCurOut() {
        if(carAmount>0){
          alert ("안녕히가세요");
        }else if(carAmount==0){
          alert ("이제 아무도 없네요");
        }}};
