// variable scope = where a variable is recognized
//                  and accessible
// local, global and rexical

function prt() {
  let outerVar = "Outer";
  
  function son() {
    console.log(outerVar); // Accessible
  }
  son();
}
prt();
    console.log(outerVar); // not Accessible outside


