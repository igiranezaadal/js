const wordCounter = function(text) {
  const counts = new Map();

  if (typeof text === "string" && text.length > 0) {
    let cleanText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === "," || char === ".") {
        cleanText += " ";
      } else {
        cleanText += char;
      }
    }

    const words = cleanText.split(/\s+/);
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (word.length > 0) {
        counts.set(word, (counts.get(word) || 0) + 1);
      }
    }
  }

  return {
    count: function(word) {
      return counts.get(word) || 0;
    }
  };
};