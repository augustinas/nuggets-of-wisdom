// Simulated asynchronous code example //
// Follows the pattern common to node-js environment, especially with errors //
// Keep in mind when writing server code //

function selectLongWords(arr, callback) {
  var longWords = arr.filter(function(word) { return word.length > 5 });

  var err = ''; // An error can be generated here for whatever reason

  // setTimeout simulates a call that takes a 'long' time //
  // Delay of 2 seconds //
  setTimeout(function() {
    callback(err, longWords);
  }, 2000);
}

// Let's make a call to our async function (async API to sound fancy) //
// When writing node code we would be doing only this bit of code //

var words = ['me', 'you', 'and', 'the', 'company', 'having', 'fun'];

selectLongWords(words, function(err, data) {
  if (err) throw err;

  console.log('long words: ' + data.join(' '));
});

console.log('This message should appear last. But is it?');