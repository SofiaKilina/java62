// console.log(window.document === document);
// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1>Hello world!</h1>';
const div1 = document.getElementById('div1');
// console.log(div1.innerHTML);
console.log(div1.title);
console.log(div1.id);
div1.style.border = '1px solid black';
console.log(document.getElementsByTagName('body')[0] === document.body);
console.log(document.querySelector('body') === document.body);
const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1.length);
for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerText = `new text ${i + 1}`;
}
console.log(div1.childNodes.length);
const children = div1.children;
console.log(children.length);
console.log(children[0] === pDiv1[0]);
// const p1 = document.getElementById('p1');
console.log(p1 === children[0]);
for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}
const newP = document.createElement('p');
const newPText = document.createTextNode('this text was created by JS');
newP.appendChild(newPText);
div1.appendChild(newP);
// div1.insertBefore(newP, document.getElementById('p1'));
// div1.insertBefore(newP, children[0]);
// div1.insertBefore(newP, div1.firstElementChild);
// div1.insertBefore(newP, div1.lastElementChild);
// div1.insertBefore(newP, children[1]);
// document.body.insertBefore(newP, outer);
// document.body.insertBefore(newP, div1.nextElementSibling);
// document.body.appendChild(newP);
const newP2 = document.createElement('p');
const newPText2 = document.createTextNode('this is p2 text');
newP2.appendChild(newPText2);
div1.replaceChild(newP2, div1.firstElementChild);
div1.removeChild(div1.firstElementChild.nextElementSibling);