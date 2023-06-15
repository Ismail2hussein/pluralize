function pluralize(words) {
  let wordCount = {};
  for (let i = 0; i < words.length; i++) {
    if (wordCount[words[i]]) {
      wordCount[words[i]]++;
    } else {
      wordCount[words[i]] = 1;
    }
  }
  let pluralWords = [];
  for (let word in wordCount) {
    if (wordCount[word] > 1) {
      pluralWords.push(word + "s");
    }
  }
  return pluralWords;
}
console.log(pluralize(["cat","dog","cat","mouse"])); // Output: ["cats","dog","mouse"]
console.log(pluralize(["car", "car", "car"])); // Output: ["cars"]
