



function countDays(d){
  //have fun with coding! :)
//   const months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
//   ];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
    if(d.getFullYear() < year){
      return "The day is in the past!";
    }
    else return "Today is the day!"
}

// link
// https://www.codewars.com/kata/5837fd7d44ff282acd000157/train/javascript