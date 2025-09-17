const t =  setInterval(move, 15);
let pos = 0;

function move() {
    pos++;
    box.style.top = pos + 'px';
    box.style.left = pos + 'px';
    if (pos >= 300) {
        clearInterval(t);
    }
}