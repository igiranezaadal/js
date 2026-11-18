var wordCounter = function(text) {
  // TODO - Add your implementation here
  //   return text;
  let count=0;
  
  var cleanText = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (char === "," || char === ".") {
      cleanText += " ";
    } else {
      cleanText += char;
    }
  }
  
  let word=text.split(' ');
  for(let i=0; i<word.length; i++){
    for(let j=1; j<word.length; j++){
      if(i==j)
        count++;
        continue;
    }
  }
  return count;
};