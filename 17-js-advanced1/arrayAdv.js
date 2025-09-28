const arr = ['one', 'two', 'Three', 'eight', 'three', 'THREE', 'six'];
console.log('=== indexOf, lastIndexOf ===');
let res = arr.indexOf('three');
console.log(res);
res = arr.indexOf('five');
console.log(res);
res = arr.lastIndexOf('three');
console.log(res);
console.log('=== includes ===');
res = arr.includes('eight');
console.log(res);
res = arr.includes('nine');
console.log(res);
console.log('=== findIndex ===');
res = arr.findIndex(e => e.toLowerCase() === 'three');
console.log(res);
res = arr.findIndex((e, index) => index > 2 && e.toLowerCase() === 'three');
console.log(res);
res = arr.findIndex((e, index) => index >= 2 && e.length === 3);
console.log(res);
const persons = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 23},
    {name: 'Alice', age: 18}
];
res = persons.indexOf({name: 'Jane', age: 18});
console.log(res);
res = persons.findIndex(e => e.name === 'Jane' && e.age === 18);
console.log(res);
res = persons.findIndex(e => e.age > 18);
console.log(res);
res = persons.findIndex((e, i) => i > 0 && e.age > 18);
console.log(res);
console.log('=== find ===');
res = persons.find((e, i) => i > 0 && e.age > 18);
console.log(res);
console.log('=== explain findIndex ===');
const fn1 = (e, i) => i > 0 && e.age > 18;
res = myFindIndex(persons, fn1);
console.log(res);
console.log('=== forEach ===');
persons.forEach((p, i) => console.log(`${i + 1}. ${p.name}, age: ${p.age}`));
// res = [];
// for (let i = 0; i < persons.length; i++) {
//     if (persons[i].age < 25) {
//         res.push(persons[i]);
//     }
// }
console.log('=== filter ===');
res = persons.filter(p => p.age < 25);
console.log(res);
// res = [];
// for (let i = 0; i < persons.length; i++) {
//     const s = `${i + 1}. ${persons[i].name}, age: ${persons[i].age}`;
//     res.push(s);
// }
console.log('=== map ===');
res = persons.map((p, i) => `${i + 1}. ${p.name}, age: ${p.age}`);
console.log(res);

persons
    .filter(p => p.age < 25)
    .map((p, i) => `${i + 1}. ${p.name}, age: ${p.age}`)
    .map(s => {
        const p = document.createElement('p');
        p.append(s);
        return p;
    })
    .forEach(p => document.body.append(p));

console.log('=== reduce ===');
const numbers = [5, 9, 11, 2, 7, 13, 2];
// let accum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     accum = accum + numbers[i];
// }
// console.log(`sum = ${accum}`);
// accum = 1;
// for (let i = 0; i < numbers.length; i++) {
//     accum = accum * numbers[i];
// }
// console.log(`product = ${accum}`);
// accum = '';
// for (let i = 0; i < numbers.length; i++) {
//     accum = accum + numbers[i];
// }
// console.log(`concat = ${accum}`);
res = numbers.reduce((accum, n) => accum + n);
console.log(`sum = ${res}`);
res = numbers.reduce((accum, n) => accum * n);
console.log(`product = ${res}`);
res = numbers.reduce((accum, n) => accum + n, 'concat = ');
console.log(res);
res = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
console.log(res);
res = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     // if (numbers[i] < res) {
//     //     res = numbers[i];
//     // }
//     res = numbers[i] < res ? numbers[i] : res;
// }
res = numbers.reduce((accum, n) => n < accum ? n : accum);
console.log(`min = ${res}`);
console.log('=== sort ===');
numbers.sort((a,b) => b - a);
console.log(numbers);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);

function myFindIndex(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i)) {
            return i;
        }
    }
    return -1;
}