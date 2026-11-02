// .map(): is array method used to transform data (by creating new array to 
//        display transfored dat in it)

const numbers = [1, 2, 'k', true, 5];
const doubled =numbers.map(num=> num * 2);
console.log(`actual data: ${numbers}`);
console.log(`changed dat by .map: ${numbers}\n\n`);


// Map() is data structure that is used to store key value pairs

const userRoles=new Map();

// .set(key, value)
userRoles.set('admin', { permission: true} );
userRoles.set( 404, 'status Error code');

console.log(userRoles.get('admin'));
console.log(userRoles.size);

