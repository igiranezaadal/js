const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName())


const o={number: 67}
function testing(){
    return this.number
}
console.log(testing());