// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Checks if number is palindrome or not 
// let num1 = 99;
// let num2 = 91;

// let product = (num1 * num2);

// let arr = product.toString().split('');

// let first = arr[0];

// let last = arr.slice(-1).join('');

// if (Number(first) == Number(last)) {
//     console.log('This is a palindrome product');
// } else {
//     console.log('This is not a palindrome product');
// }

// Use loops to find the biggest palindrome using three digit numbers

function isPalindrome(x) {
    let arr = x.toString().split('');
    let first = arr[0];
    let last = arr.slice(-1).join('');
    if (Number(first) == Number(last)) {
        return true;
    }
}

// Check each number 100 -> 999 (3 digit)
function largestPalindrome() {
    for (let i = 100; i < 1000; i++) {
        // multiply by each number 1 -> 999 
        for (let k = 100; k < 1000; k++) {
            let mult = i*k;
            if (mult > largest && isPalindrome(mult)) {
                largest = mult;
            }
        }
    }
    console.log("The largest 3-digit palindrome product is " + largest + ", a result of " + i + ' * ' + k);
}
    
