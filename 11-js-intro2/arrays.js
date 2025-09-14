const arr = [1, 2, 3, 'four', 'five', true];
console.log(typeof arr);
console.log(arr[3]);
// arr = 42;
console.log(typeof arr[2]);
console.log(arr.length);
arr[3] = 4;
console.log(arr[3]);
console.log(arr);
printArray(arr);
arr[arr.length] = 42;
console.log(arr);
printArray(arr);
console.log(arr.length);
arr[arr.length] = '100500';
console.log(arr);
printArray(arr);
console.log(arr.length);
console.log(arr[8]);
arr.length = 3;
console.log(arr);
printArray(arr);
console.log(arr.length);
const newArr = [];
console.log(newArr.length);
//console.log(newArr);
printArray(newArr);


function printArray(arr) {
    console.log('==========');
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('==========');
}