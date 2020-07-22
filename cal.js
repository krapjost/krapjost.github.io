let displayText = "";
let input_num;
let operatorType;

function addDisplay(n){
  document.calc.display.value = ""
  displayText += n+" "
  document.calc.display.value = displayText;
};

function clearDisplay(){
  displayText = ""
  document.calc.display.value = displayText;
}
/*아래 왜 안되는지와 let과 var의 스코프 차이 알아볼 것
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
  const display = "- ";
  displayText += display;
  document.calc.display.value = displayText;
};

function cal_mul(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "mul";
  const display = "* ";
  displayText += display;
  document.calc.display.value = displayText;
};

function cal_div(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "div";
  const display = "/ ";
  displayText += display;
  document.calc.display.value = displayText;
};

function cal_add(){
  if (displayText == "") {
    displayText = result;
  };
  input_num = parseFloat(displayText);
  operatorType = "add";
  const display = "+ ";
  displayText += display;
  document.calc.display.value = displayText;
};

function calculate(){
  const stringResult = document.calc.display.value;
  console.log (stringResult);
  console.log (typeof(stringResult));
  document.calc.display.value = eval(stringResult);//eval쓰지 말라고 해서 다른 방법으로는 내일 시도해 보겠습니다.
  /*
  let resultArray = stringResult.split(" ");
  console.log (resultArray);
  const doMath = {
    '+': function a(){

    };
  };*/
};
