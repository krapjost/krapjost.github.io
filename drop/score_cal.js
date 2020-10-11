
function addFields() {
  event.preventDefault()
  var container = document.getElementById("container");
  var number = document.getElementsByName("noOfTests")[0].value;
  container.innerHTML = '';
    for (i = 0; i < number; i++) {
      container.appendChild(document.createTextNode("점수" + (i + 1)));
      var input = document.createElement("input");
      input.type = "text";
      input.name = "점수" + i;
      input.id = "s" + i;
      // input.value = "";
      //input.required= true;
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    };
  var Array = [];
  var button1 = document.createElement("button");
  container.appendChild(button1);
  button1.innerHTML = '점수제출';

  function pushArray() {
        button1.onclick = function(){
        for (var i = 0; i < number; i++)
          {Array.push(document.getElementById("s" + i).value)}
        console.log(Array);
        console.log(Array[1]);
           var button2 = document.createElement("button");
           container.appendChild(button2);
           button2.innerHTML = '점수계산';
          function getGrade() {
             button2.onclick = function(){
                let number = document.getElementsByName("noOfTests")[0].value;
                for(let i=0; i < number; i++){
                  let score = Array[i];
                  if (score >= 95) {
                    score = 'A+';
                  }else if (score < 94 && score >= 90) {
                    score = 'A';
                  }else if (score < 90 && score >= 85) {
                    score = 'B+';
                  }else if (score < 85 && score >= 80) {
                    score = 'B';
                  }else if (score < 80 && score >= 70) {
                    score = 'C';
                  }else {
                    score = 'F'}console.log(score);
                };
             };
          }getGrade();
      };
   };pushArray();
};


  //  for(var i in scoreArray){
//    console.log(scoreArray[i]);}

/*
function grade_is(score){
  if (score >= 95) {
    score = 'A+';
  }else if (score < 94 && score >= 90) {
    score = 'A';
  }else if (score < 90 && score >= 85) {
    score = 'B+';
  }else if (score < 85 && score >= 80) {
    score = 'B';
  }else if (score < 80 && score >= 70) {
    score = 'C';
  }else {
    score = 'F';
  }console.log(score)};
*/
/*
getElementsByClassName('className')

function scoreToGrade(){
  //여기서 getElementById('id') id 부분을 변수(파라미터?)로 넣고 싶다.
  let score = document.getElementById('mat_score').value;
  let toGrade = document.getElementById('mat_grade');
  if (score >= 95) {
    score = 'A+';
  }else if (score < 94 && score >= 90) {
    score = 'A';
  }else if (score < 90 && score >= 85) {
    score = 'B+';
  }else if (score < 85 && score >= 80) {
    score = 'B';
  }else if (score < 80 && score >= 70) {
    score = 'C';
  }else {
    score = 'F';
  }toGrade.innerHTML = score};

*/

//다음과 같이 해보았으나 잘 되지 않았다. 그래서 일일이 넣기로 했다.
/*
  const m = document.getElementById('mat_score').value;
  const e = document.getElementById('eng_score').value;
  const k = document.getElementById('kor_score').value;
  const s = document.getElementById('si_score').value;
  const h = document.getElementById('his_score').value;
//HTML문서에 onclick='scoreToGrade(m)'을 했는데 왜 다음 함수 파라미터의 x가 m이 되지 않는건지 모르겠다.
function scoreToGrade(x){
  let score = x
  let toGrade = document.getElementById('mat_grade');
  if (score >= 95) {
    score = 'A+';
  }else if (score < 94 && score >= 90) {
    score = 'A';
  }else if (score < 90 && score >= 85) {
    score = 'B+';
  }else if (score < 85 && score >= 80) {
    score = 'B';
  }else if (score < 80 && score >= 70) {
    score = 'C';
  }else {
    score = 'F';
  }toGrade.innerHTML = score};
  */
