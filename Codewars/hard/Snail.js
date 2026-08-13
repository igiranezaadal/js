// function snail(array) {
//   // const [a,b,c]=array
//   // let 
// //   return a.concat(b.reverse(),c);
// // return `{a:${a},b:${b},c:${c}}`
// }



function snail(array) {
  // // Handle empty matrix [[]]
  // if (!array || !array.length || !array[0].length) return [];
  
  // // Destructure 3 rows
  // const [a, b, c] = array;

  // // Single element matrix [[1]]
  // if (!b) return a;

  // // Manual clockwise picking for a 3x3 matrix:
  // // Top row: [1, 2, 3] -> a
  // // Right column element: 6 -> b.pop()
  // // Bottom row reversed: [9, 8, 7] -> c.reverse()
  // // Left column element: 4 -> b.shift()
  // // Middle element remaining in b: 5 -> b
  
  // const top = a;
  // const right = [b.pop()];
  // const bottom = c.reverse();
  // const left = [b.shift()];
  // const middle = b; // only [5] is left in b now!

  // return top.concat(right, bottom, left, middle);


  const result = [];

  while (array.length && array[0].length) {
    // 1. Take the entire top row
    result.push(...array.shift());

    // 2. Take the last element of every remaining row (right edge)
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // 3. Take the bottom row in reverse (bottom edge)
    if (array.length) {
      result.push(...array.pop().reverse());
    }

    // 4. Take the first element of every remaining row, bottom-to-top (left edge)
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}

console.log(snail([[1,2,3],[4,5,6],[7,8,9]]));
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
