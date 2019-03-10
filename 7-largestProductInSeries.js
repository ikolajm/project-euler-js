// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

let checkLargestProduct = (spread, digit) => {

    let bigNumber = [];
    let group;
    let product;

    for (i = 0; i < digit; i++) {
        let num = Math.floor(Math.random() * 10);
        bigNumber.push(num);
    }
    numberCheck(spread, bigNumber, digit);
}

let numberCheck = (spread, arr, digit) => {
    let largestProduct = 0;
    for (i = 0; i < arr.length; i++) {
        let group = arr.splice(i, spread);
        let total = 1;
        for (i = 1; i < group.length + 1; i++) {
            total *= i;
        }
        if (total > largestProduct) {
            largestProduct = total;
        }
    }
    console.log(`The largest product in a ${spread} digit span over this ${digit} digit number is ${largestProduct}`);
}

checkLargestProduct(13, 1000);