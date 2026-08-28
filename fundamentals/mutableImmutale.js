//immutable means a value cannot be changed after it is created
// mutable means the value can be modified directly in memory without creating a new one



// const originalUser = {
//   name: "Alice",
//   location: {
//     city: "New York",
//     country: "USA"
//   }
// };

// // Creating a shallow copy using the spread operator
// const shallowCopy = { ...originalUser };

// // 1. Modifying a top-level property
// shallowCopy.name = "Bob"; 

// // 2. Modifying a nested property
// shallowCopy.location.city = "Los Angeles";

// console.log(originalUser.name);          // "Alice" (Unchanged ✅)
// console.log(originalUser.location.city); // "Los Angeles" (Changed! ❌ Shared reference)





const originalUser1 = {
  name: "Alice",
  location: {
    city: "New York",
    country: "USA"
  }
};

// Creating a deep copy using modern structuredClone()
const deepCopy = structuredClone(originalUser1);

// 1. Modifying a top-level property
deepCopy.name = "Bob";

// 2. Modifying a nested property
deepCopy.location.city = "Miami";

console.log(originalUser1.name);          // "Alice" (Unchanged ✅)
console.log(originalUser1.location.city); // "New York" (Unchanged! ✅ Completely independent
