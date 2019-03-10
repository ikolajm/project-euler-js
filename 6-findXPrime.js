// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

let primes = [2];

let numPrime = 100;

let primeNum = num => {
    let count = 3;
    let base = 2;
    while (primes.length < num) {
        while (count % base !== 0) {
            base++;
            if (count === base) {
                primes.push(count);
                break;
            }
        }
        count++;
        base = 2;
    }
    console.log(`The ${numPrime} prime number is ${primes.pop()}`);
}

primeNum(numPrime);