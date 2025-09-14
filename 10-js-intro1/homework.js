let res = sumDigits(12345);
console.log(`sum = ${res}`); // sum = 15
res = luckyNumber2(123871); // 1 + 3 + 7 === 2 + 8 + 1 lucky
console.log(`${res ? 'lucky' : 'not lucky'}`);
res = luckyNumber2(123971); // 1 + 3 + 7 !== 2 + 9 + 1 not lucky
console.log(`${res ? 'lucky' : 'not lucky'}`);


function sumDigits(num) {
    let sum = 0;
    while (num) {
        sum += num % 10; // sum = sum + num % 10
        num = (num - num % 10) / 10;
    }
    return sum;
}

function luckyNumber(num) {
    let sum1 = 0;
    let sum2 = 0;
    let pos = 1;
    while (num) {
        if (pos % 2) {
            sum1 += num % 10
        } else {
            sum2 += num % 10;
        }
        num = (num - num % 10) / 10;
        pos++;
    }
    return sum1 === sum2;
}

function luckyNumber1(num) {
    let sum1 = 0;
    let sum2 = 0;
    while (num) {
        sum1 += num % 10
        num = (num - num % 10) / 10;
        sum2 += num % 10;
        num = (num - num % 10) / 10;
    }
    return sum1 === sum2;
}

function luckyNumber2(num) {
    // TODO Homework 1 explain this solution
    let sum = 0;
    while (num) {
        sum = num % 10 - sum;
        num = (num - num % 10) / 10;
    }
    return !sum;
}