function findArray(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  return arr2.map(index => arr1[index]);
}
console.log(findArray(arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4]));
console.log(findArray( arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7]));
console.log(findArray(arr1 = [0, 3, 4], arr2 = [2, 6]));
console.log(findArray(arr1 = ['a','b','c','d'] , arr2 = [2,2,2]));
