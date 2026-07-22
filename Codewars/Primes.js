function primes(start, end) {

     let result = [];
     for (let number = start; number <= end; number++) {

        if (number <= 1) {
            continue;
        }

        let prime = true;

        for (let divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            result.push(number);
        }
    }

    return result.length === 0 ? null : result;
}
console.log(primes(1,29));