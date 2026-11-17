



function countDays(d){
  //have fun with coding! :)
  //   const months = [
  //     "January", "February", "March", "April",
  //     "May", "June", "July", "August",
  //     "September", "October", "November", "December"
  //   ];
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = today.getMonth() + 1;
  //   const day = today.getDate();
  const diffTime = new Date(d) - new Date();
  const diffDays = Math.round(
    diffTime / (1000* 60* 60* 24)
  );
  
  if (diffDays < 0) 
    return "The day is in the past!";
  if (diffDays === 0) 
    return "Today is the day!";
  return `${diffDays} days`; 
}

// link
// https://www.codewars.com/kata/5837fd7d44ff282acd000157/train/javascript