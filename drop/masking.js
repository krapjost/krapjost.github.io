function getRegNum(val){
  let input = val ;
  let firstSix ;
  let maskingStr ;
  const regNum = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/g ;

  function init(){
    if (input.length == 6){
      firstSix = input;
      input += "-";
    }
  };init();
  console.log(input);
  function masking(){
    if (input.length > 7);{
    maskingStr = input.toString().replace(/(-?)([1-4]{1})([0-9]{6})\b/gi,"$1$2******");
    document.regit_check.reg_num.value = maskingStr;
    };
  };masking();

  if (regNum.test(input)){
    console.log("잘 썼습니다.");
  }else {
    console.log("잘 못 썼습니다.");
  };
    console.log(input.length);
}
