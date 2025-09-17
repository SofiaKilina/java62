const t = setInterval(move, 15);
let pos = 0;
let i = 1;

function move() {
    if (pos >= 300) {
        i = -1;
    }
    if (pos <= 0) {
        i = 1;
    }
    pos += i;
    box.style.top = pos + 'px';
    box.style.left = pos + 'px';
}