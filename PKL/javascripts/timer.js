let strTime = document.getElementById('timer');
let cost = document.getElementById('cost');
let tcost = document.getElementById('tcost');
let inTime = Date.parse(strTime.innerText);

strTime.onload = setInterval(function () {

    let now = new Date();
    let n = Date.parse(now);
    let msec = n - inTime;

    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return hrs + ':' + mins + ':' + secs;
    }
    time = msToTime(msec);
    strTime.innerText = time;
}, 60);

window.onload = setInterval(function () {
    const H = parseInt(strTime.innerText.split(':')[0]);
    const M = parseInt(strTime.innerText.split(':')[1]);

    const h = H * 3000;
    const m = M * 50;

    cost.innerText = h + m;
    tcost.value = h + m;
}, 1000);