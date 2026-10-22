// Task: Write a function named getEligibleUsers(users). The function should return a Map where:

// Each key is a user's id.
// Each value is the corresponding user object.
// Only users whose active property is true should be included.
// Duplicate users (based on id) should appear only once in the Map.
// The original users array must not be modified.

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 1, name: "Alice", active: true },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "David", active: false },
  { id: 3, name: "Charlie", active: true }
];
getEligibleUsers(users);

/*
Expected outcome

Map(2) {
  1 => { id: 1, name: "Alice", active: true },
  3 => { id: 3, name: "Charlie", active: true }
}
*/