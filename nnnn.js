function transformToObject(users){

z
}
const users = [
  { id: 1, name: 'Alicen' },
  { id: 2, name: 'Bob marley' },
  { id: 3, name: 'Charlie kirk' },
];

const transformed = transformToObject(users);
console.log(transformed); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }





let myObject = { oldKey: "some data" };
myObject["newKey"] = myObject["oldKey"];
delete myObject["oldKey"]; 
