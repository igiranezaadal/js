let count = 0;

// Execute every 1000 milliseconds (1 second)
const iterate = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);
  
  // Stop the interval after 3 iterations
  if (count === 3) {
    // clearInterval(iterate);
    console.log("Interval cleared");
  }
}, 1000);
