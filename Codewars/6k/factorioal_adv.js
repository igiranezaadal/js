// link
// https://www.codewars.com/kata/6a92adf37a5942e596d3e89f/train/javascript

function surjections(n, k) {
  n = BigInt(n);
  k = BigInt(k);

  if (k > n || k === 0n) return 0n;
  
  if (k === n) {
    let fact = 1n;
    for (let i = 1n; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  if (k === 1n) return 1n;

  const memo = {};
  function getStirling(n, k) {
    if (k === 1n || k === n) return 1n;
    const key = `${n.toString()},${k.toString()}`;
    if (memo[key] !== undefined) return memo[key];
    
    const result = k * getStirling(n - 1n, k) + getStirling(n - 1n, k - 1n);
    memo[key] = result;
    return result;
  }

  let factK = 1n;
  for (let i = 1n; i <= k; i++) {
    factK *= i;
  }
  return factK * getStirling(n, k);
}

// console.log(surjections(3, 2).toString());
// console.log(surjections(3, 2).toString());
    console.log( surjections(3n,2n)) // 6n, `surjections(3n,2n)`
    console.log( surjections(6n,2n)) // 62n, `surjections(6n,2n)`
    console.log( surjections(5n,3n)) // 150n, `surjections(5n,3n)`