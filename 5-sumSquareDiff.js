// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let natNumber = 100;

let findDiff = num => {
    let sum = sumOfSquare(num);
    let square = diffOfSquare(num);
    let diff = sum - square;
    console.log(`The difference between the sum of squares and the square of sum is ${diff}.`);
}

// Function that counts up to a given number, adding the squares of each number together, returning the result
let sumOfSquare = num => {
    let sumArr = [];
    for (i=1; i < (num + 1); i++) {
        let ss = i*i;
        sumArr.push(ss);
    };
    return sumArr.reduce(getSum);
}

// Function to add all items of an array together
let getSum = (total, num) => {
    return total + num;
}

// Function thar adds all the numbers together, then takes that number and squares it, returning the result
let diffOfSquare = num => {
    let squareArr = [];
    let add = 0;
    for (i=1; i < (num + 1); i++) {
        add += i;
    }
    return add;
}

// Run it
findDiff(natNumber);