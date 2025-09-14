const root = document.getElementById('root');
const h1 = document.createElement('h1');
root.appendChild(h1);

setInterval(showTime, 1000);

function showTime() {
    const date = new Date();
    const h = addZero(date.getHours());
    const m = addZero(date.getMinutes());
    const s = addZero(date.getSeconds());
    h1.innerText = `${h}:${m}:${s}`;
}

function addZero(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}