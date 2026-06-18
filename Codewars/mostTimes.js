function mostFrequentItemCount(collection) {
  if (!collection || collection.length === 0) return 0;

  const counts = {};
  let maxCount = 0;
  // Count the occurrences of each item
  for (const item of collection) {
    counts[item] = (counts[item] || 0) + 1;
    
    // Keep track of the highest count so far
    if (counts[item] > maxCount) {
      maxCount = counts[item];
    }
  }

  return maxCount;
}

// Example usage:
console.log(mostFrequentItemCount([3,9,9,9,9,9, -1, -1, -1, 2, 3, 3, 2, 4, 9, 3])); // Returns: 5 (since 3 appears 5 times)
