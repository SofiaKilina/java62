// ax = b
let a = 0;
let b = 20;
let res = b / a;
if (isNaN(res)) {
    console.log(`solution any number`)
} else if (!isFinite(res)) {
    console.log('No solution')
} else {
    console.log(res);
}
