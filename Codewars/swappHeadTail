function swapHeadAndTail(arr) {
    if (arr.length <= 1) {
        return arr.slice();
    }
    const half = Math.floor(arr.length / 2);
    const head = arr.slice(0, half);
    const tail = arr.slice(arr.length - half);
    if (arr.length % 2 === 0) {
        return tail.concat(head);
    } else {
        const middle = arr[half];
        return tail.concat(middle, head);
    }
}
console.log(swapHeadAndTail([ 1 ]));                // [ 1 ]
console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]));    // [ 4, 5, 3, 1, 2 ]
console.log(swapHeadAndTail([ 1, 2, 3, 4, 5, 6 ])); // [ 4, 5, 6, 1, 2, 3 ]
console.log(swapHeadAndTail([1, 2, 3, 4, 5]));      // [4, 5, 3, 1, 2]
console.log(swapHeadAndTail([-1, 2]));              // [2, -1]
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6]));   // [4, 5, 6, 1, 2, 3]