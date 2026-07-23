function removeSmallest(numbers) {
    let num = [...numbers]; 
    let minIndex = numbers.indexOf(Math.min(...numbers));
    if (minIndex !== 1) {
        num.splice(minIndex, 1);
    }
    return num;
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
