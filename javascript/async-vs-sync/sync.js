// Synchronous code example //
// Filter method works similarly to Ruby array's #filter //

function selectLongWordsSync(arr) {
  return arr.filter(function(word) { return word.length > 5 });
}

var words = ['me', 'you', 'and', 'the', 'company', 'having', 'fun'];
var longWords = selectLongWordsSync(words);

console.log('long words: ' + longWords.join(' '));

console.log('This message should appear last.');