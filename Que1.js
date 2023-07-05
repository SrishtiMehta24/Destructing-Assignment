function wordCount(str) {
    const words = str.split(" "); // Split the string into an array of words
    const wordCountMap = new Map(); // Create a new Map to store word counts
  
    // Iterate over each word
    for (let word of words) {
      // Trim any leading or trailing spaces from the word
      word = word.trim();
  
      // Skip empty words
      if (word === "") {
        continue;
      }
  
      // Increment the count of the word in the map
      if (wordCountMap.has(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    }
  
    return wordCountMap;
  }
  

const text = "This is a sample text. This text contains sample words.";
const result = wordCount(text);
console.log(result);
  