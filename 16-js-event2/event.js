const names = namesBox.children;

btn.addEventListener('click', show);
btn.addEventListener('click', e => console.log(e.timeStamp));

// btn.onclick = show;
// btn.onclick = e => console.log(e.timeStamp);
// name1.onkeyup = valueToUpperCase;
// name2.onkeyup = valueToUpperCase;
// name3.onkeyup = valueToUpperCase;

for (let i = 0; i < names.length; i++) {
    names[i].firstElementChild.onkeyup = valueToUpperCase;
}

function show(e){
    // console.log(e.target);
    for (let i = 0; i < names.length; i++) {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(names[i].firstElementChild.value));
        document.body.appendChild(p);
        names[i].firstElementChild.value = '';
    }
}

function valueToUpperCase(event){
    // console.log(event.target === name1);
    // event.target.parentElement
    event.target.value = event.target.value.toUpperCase();
}