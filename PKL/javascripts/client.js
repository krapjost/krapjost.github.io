const emptyspot = document.getElementById('spot');
let tcolor = document.getElementById('color');
let spots = document.getElementsByTagName('td');
let thObject = document.getElementsByClassName('th');
let thArr = Object.values(thObject)

const timerBtn = document.getElementById('timerbtn');


window.onload = function () {

    (() => {
        let cnt = document.getElementById('count_car').textContent;
        if (cnt <= 15) {
            tcolor.style.backgroundColor = "rgb(45, 132, 231)";
        } else if (cnt < 20) {
            tcolor.style.backgroundColor = "orange";
        } else {
            tcolor.style.backgroundColor = "red";
        }
    })();

    do {
        thArr.every(element => {
            if (spots[0].textContent === element.textContent) {
                element.textContent = 'P';
                spots[0].remove();
            }
            if (spots.length == 0) {
                return false;
            } else {
                return true;
            }
        });
    } while (spots.length > 0);

    const parked = document.getElementsByClassName('th');
    const pArr = Object.values(parked);
    pArr.forEach(element => {
        if (element.textContent === 'P') {
            element.style.backgroundColor = "rgb(87, 87, 87)";
            element.style.color = "black";
            element.style.border = "10px solid black";
        }
    });


};


function writeSpot(spot) {
    if (document.getElementById(spot).textContent === 'P') {
        return false;
    } else {
        document.getElementById(spot).style.backgroundColor = "rgb(87, 87, 87)";
        emptyspot.value = spot;
    }
}

function redirect() {
    let idIs = document.getElementById('user_id').value;
    console.log(idIs);
    // change URL!!
    const myURL = 'http://127.0.0.1:5000/timer/:' + idIs;
    console.log(myURL);
    document.getElementById('timerbtn').href = myURL;
}

timerBtn.addEventListener('click', redirect, false);