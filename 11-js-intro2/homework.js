const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
sort(arr);
printArray(arr); // 0, 1, 1, 2, 2, 2, 4, 5, 9, 9

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function printArray(arr) {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}