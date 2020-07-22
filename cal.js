let displayText = "";
let input_num;
let operatorType;

function addDisplay(n){
  document.calc.display.value = ""
  displayText += n//+" " .split 때문에 띄워쓰기
  document.calc.display.value = displayText;
};

function clearDisplay(){
  displayText = ""
  document.calc.display.value = displayText;
}
/*아래 왜 안되는지, 또 전역 변수 var를 쓰지 말라고 하는데 let을 쓰면 스코프 문제로 실행이 안되어서 어쩔 수 없이 var를 쓰고 있는데 let을 var처럼 쓸 수 있는 방법이 있을까요?
  const input_number = prmt;
  console.log(input_number);
  const input_value = document.getElementById("seven").value;
  console.log(input_value);
*/


function cal_sub(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "sub";
  const display = "-"; //.split으로 어레이화하기 위해 띄워쓰기, eval로 실행시 2자리 수가 계산안됨
  displayText += display;
  document.calc.display.value = displayText;
};

function cal_mul(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "mul";
  const display = "*";
  displayText += display;
  document.calc.display.value = displayText;
};

function cal_div(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "div";
  const display = "/";
  displayText += display;
  document.calc.display.value = displayText;
};

function cal_add(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "add";
  const display = "+";
  displayText += display;
  document.calc.display.value = displayText;
};

function calculate(){
  const stringResult = document.calc.display.value;
  console.log (stringResult);
  console.log (typeof(stringResult));
  document.calc.display.value = eval(stringResult);
  console.log (eval(stringResult));
  //eval쓰지 말라고 해서 다른 방법으로는 내일 시도해 보겠습니다.
  /*
  let resultArray = stringResult.split(" ");
  console.log (resultArray);
  const doMath = {
    '+': function a(){

    };
  };*/
};
