deadAntCount = function(ants) {
  if (ants === null || ants === undefined) {
    return 0;
  }
  const antParts = ants.split(' ');
  let deadAnts = 0;
  for (const C of antParts) {
    if (C !== 'ant') {
      deadAnts++;
    }                                                   
  }
  return deadAnts;
}
console.log(deadAntCount("ant ant ant ant")); //  0
console.log(deadAntCount(null)); // 0
console.log(deadAntCount("ant anantt aantnt")); // 2
console.log(deadAntCount("ant ant .... a nt")); // 1