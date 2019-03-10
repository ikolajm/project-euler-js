// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

let findSumPrimes = (endNum) => {
    let primes = [2];
    let total = 0;

    for (i = 3; i < endNum + 1; i++) {
        let base = 2;
        while (i % base !== 0) {
            base++;
            if (i === base) {
                primes.push(i);
                break;
            }
        }
        base = 2;
    }

    primes.forEach(item => {
        total += item;
    });
    
    console.log(`The sum of primes below ${endNum} is ${total}`);
}

findSumPrimes(10);