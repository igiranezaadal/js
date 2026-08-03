function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  if(period==='am'){
    if(hour===12){
      hour=0
    }
    if(hour<10){
      hour=`0${hour}`
    }
    if(minute<10){
      minute=`0${minute}`
    }
    return `${hour}${minute}`
  }
  else{
    //  if(period==='pm'){
    hour+=12
    if(hour<10){
      hour=`0${hour}`
    }
    else if(hour===24){
      hour=12
    }
    if(minute<10){
      minute=`0${minute}`
    }
    return `${hour}${minute}`
  }
}
    console.log(to24hourtime( 1,  0, "am")) // "0100", "Input =  1:00 am"
    console.log(to24hourtime( 1,  0, "pm")) // "1300", "Input =  1:00 pm"
    console.log(to24hourtime(12,  0, "am")) // "0000", "Input = 12:00 am"
    console.log(to24hourtime(12,  0, "pm")) // "1200", "Input = 12:00 pm"
    console.log(to24hourtime( 6, 30, "am")) // "0630", "Input =  6:30 am"
    console.log(to24hourtime( 9, 45, "pm")) // "2145", "Input =  9:45 pm"
// console.log(typeof(Promise))