function countNumber(matrix, num) {
    // //coding and coding..
    // matrix=matrix.flat(Infinity).sort((a,b)=> a-b);
    // let count=0;
    // for(let matris of matrix){
    //     if(matris>=num){
    //         count=count+1
    //     }
    // }
    // // for (let i = 0; i<=matrix.length; i++){
    // //     if (matrix[i]>=num){
    // //         count++;
    // //     }
    // // }
    // return matrix;
    function countNumber(arr, num) {
  let rows = arr.length, cols = arr[0].length;
  let r = 0, c = cols - 1, count = 0;
  while (r < rows && c >= 0) {
    if (arr[r][c] === num) {
      count++;
      r++;
    } else if (arr[r][c] > num) {
      c--;
    } else {
      r++;
    }
  }
  return count;
}
}
 var arr=[
    [1, 3, 5, 7],
    [2, 4, 7, 8],
    [3, 5, 9, 10]];
    console.log(countNumber(arr,3)) //7

    
    var arr=[
    [62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],
    [63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],
    [64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
    [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],
    [66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],
    [67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]];
        console.log(countNumber(arr,81)) // 5

    