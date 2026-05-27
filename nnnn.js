function transformToObject(users){

z
}
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie kirk' },
];

const transformed = transformToObject(users);
console.log(transformed); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }







let myObject = { oldKey: "some data" };
myObject["newKey"] = myObject["oldKey"];
delete myObject["oldKey"]; 
