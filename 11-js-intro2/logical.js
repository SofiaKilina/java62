let a = true;
let b = false;
let res = a || b;
console.log(res);
res = a && b;
console.log(res);
console.log('==========');
a = 'John';
// let nickname = a ? a : 'Anonymous';
let nickname = a || 'Anonymous';
console.log(nickname);
console.log('==========');
greeting();

function greeting(name = 'Anonymous') {
    // name = name || 'Anonymous';
    // name = name ?? 'Anonymous';
    console.log(`Hello ${name}`)
}