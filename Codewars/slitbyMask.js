function split(string,mask) {
//   let result = [];
//   string = string.split('');
// //   string = string.split('').reverse().join('');
//   let index = 0;
//   if (mask.length===0  || mask.length===1) return null
//   else{
//     for (let i = 0; i < mask.length; i++) {
//       result.push(string.slice(index, index + mask[i]).join(''));
//       index += mask[i];
//     }
//     return result;
//     }



  if (typeof string !== 'string' || !Array.isArray(mask)) return null;

  // Handle empty inputs
  if (string.length === 0 && mask.length === 0) return [];
  if (string.length === 0) return null;

  const totalMaskLength = mask.reduce((acc, len) => acc + len, 0);

  // Return null if string is shorter than total requested mask length
  if (string.length < totalMaskLength) return null;

  const result = [];
  let index = 0;

  for (const length of mask) {
    result.push(string.slice(index, index + length));
    index += length;
  }

  return result;

}

    console.log( split("1234567890",[3,3,4]));  //["123","456","7890"], `split("1234567890",[3,3,4])` );
    console.log( split("codewars",[4,4]));  //["code","wars"], `split("codewars",[4,4])` );
