console.log("Hello World!");
let x;
console.log(x);
x = 7;
console.log(x);
x = 'Bye';
console.log(x);
const pi = 3.14159265359;
console.log(pi);
// pi = 3;
let y = x;
console.log(y);
let a = 2.718281828;
console.log('a = ' + a);
console.log(`a = ${a}`);
const exp = a;
a = 2.7;
console.log('exp = ' + exp + ', or ' + a);
console.log(`exp = ${exp}, or ${a}`);
let res = 7 % 5;
console.log(`res = ${res}`);
console.log(`res = ${17 % 6}`);
res = 7 + 'UP';
console.log(res);
x = true;
console.log(x);
x = null;
console.log(x);
res = null - 5;
console.log(res);
res = false == 0;
console.log(res);
res = false === 0;
console.log(res);
res = '5' == 5;
console.log(res);
res = '5' === 5;
console.log(res);
res = '5';
switch (res) {
    case 5:
        console.log(`number : ${res}`);
        break;
    case '5':
        console.log(`string : ${res}`);
        break;
    default:
        console.log(`${res} not a five`);
}
let age = 21;
let vol = age >= 24 ? 42 : age >= 18 ? 4.5 : 1.5;
console.log(`vol = ${vol}`);
if (age >= 18) {
    vol = 42;
} else {
    vol = 1.5;
}
console.log(`vol = ${vol}`);
res = -age;
console.log(`res = ${res}`);
x = 10;
res = x++;
console.log(x);
console.log(res);
for (let i = 1; i <= 5; ++i) {
    console.log(i)
}
console.log('=========');
console.log(typeof res);
res = '10';
console.log(typeof res);
res = true;
console.log(typeof res);
res = undefined;
console.log(typeof res);
res = NaN;
console.log(typeof res);
res = null;
console.log(typeof res);