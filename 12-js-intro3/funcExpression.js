// const greeting = function (name) { // let name
//     return `Hello ${name}`;
// }

// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

// const factorial = function f(n){
//     return n === 0 ? 1 : n * f(n - 1);
// }

const printName = name => console.log(name);


printName('Mary');

const greeting = name => {
    let res = `Hello ${name}`;
    return res;
}

console.log(greeting('John')); // name = 'John'
console.log(greeting);
const greeting2 = greeting;
console.log(greeting2('Peter')); // name = 'Peter'
console.log(greeting2);
console.log(typeof greeting);
console.log(typeof greeting2);
console.log('==========');
let res = pow2(4); // x = 4
console.log(res);
const fn1 = pow2;
res = fn1(3);
console.log(res);
console.log(pow2);
console.log(fn1);
res = factorial(5);
console.log(res);
console.log('==========');
res = uniFunc(4, factorial, x => x ** 2);
console.log(res);
res = uniFunc(-3, factorial, pow2);
console.log(res);
res = uniFunc(2, x => x ** 3, a => a ** 2);
console.log(res);
res = uniFunc(-3, pow3, pow2);
console.log(res);
res = uniFunc(-3, 'x => x ** 3', 'pow2'); //eval
console.log(res);



// fn1, fn2 - callback functions
function uniFunc(a, fn1, fn2) { // let a, let fn1, let fn2
    if(typeof a !== 'number' || typeof fn1 !== 'function' || typeof fn2 !== 'function') {
        return 'Error';
    }
    if (a > 0) {
        return fn1(a);
    } else {
        return fn2(a);
    }
}

function pow3(x){
    return x ** 3;
}

function pow2(x) {
    return x ** 2;
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
    // let res = 1;
    // for(let i = 1; i <= n; i++){
    //     res *= i;
    // }
    // return res;
}