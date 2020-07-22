
//버튼을 크릭하면 해당 버튼의 value를 받아서 html글 생성
function write(value){
  
  const input_number = value;
  console.log(input_number);
  const input_value = document.getElementById("seven").value;
  console.log(input_value);
};


/*
function cal_sub(firstNum, ...restArgs){
  for(let i = 0; i < restArgs.length; i++){
    firstNum -= restArgs[i];
  };
  return firstNum;
}
cal_sub(10, 5, 2, 2);

function cal_mul(firstNum, ...restArgs){
  for(let i = 0; i < restArgs.length; i++){
    firstNum *= restArgs[i];
  };
  return firstNum;
};
cal_mul(10, 2, 5);

function cal_div(firstNum, ...restArgs){
  for(let i = 0; i < restArgs.length; i++){
    firstNum /= restArgs[i];
  };
  return firstNum;
};
cal_div(10, 2, 5);

function cal_add(firstNum, ...restArgs){
  for(let i = 0; i < restArgs.length; i++){
    firstNum += restArgs[i];
  };
  return firstNum;
}
cal_add(10, 20, 30);

function run_cal(){

}
*/
