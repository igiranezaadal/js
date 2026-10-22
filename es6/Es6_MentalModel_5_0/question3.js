// Write a function that takes an array of objects, where each object has a 
// type property. The function should return an object where the keys are the unique
//  type values, and the values are the number of occurrences of that type in the input array.

function flattenAndUnique(arr) {
    const single = arr.flat(Infinity); //Simplifies multi-dimensional or nested arrays into a single-level or less-nested structure.
    return [...new Set(single)];
}
const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
console.log(result);