
function a(){
  let arr = [];

  while(true){
    var product = prompt('product를 입력해주세요 : ');
    var code="";
    arr.push(product);
    let count=0;
    if(product=="q"){
      alert('프로그램을 종료합니다.')
      break;
    }
    let sStr = product.slice(0,2); //
    code+=sStr;
  for(let i=0; i<arr.length; i++){
    if(arr[i] == product) count++;
  console.log(count);
  }
    if(count<10){
      code+="000"+count;
    }
    alert('생성한 코드는 ' +code);
  }
};
