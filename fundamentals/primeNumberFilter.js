
function isPrime(num) {
    if (num <= 1 || num === 2) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {      
                return false;
            }
        }
    }
    return true;
}

let Arrays = [2,4, 7, 12, 11, 15, 17, 20, 23];
console.log(Arrays.filter(isPrime));
