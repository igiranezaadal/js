function highAndLow(numbers){
    numbers=numbers.split(' ')
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return `${max} ${min}`
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow("1 2 3")); // "3 1";

