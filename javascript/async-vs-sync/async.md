### Async _vs_ sync code in JS ###

Synchronous code is executed in the order that it is written in. It exhibits blocking behaviour - any particular line of code can be executed only after ALL of the previous code has finished. If 'slow' operation is encountered (AJAX call, large DB query, _etc_) the execution of the whole program is halted until the operation is complete.

A simple example of synchronous JS.

```JavaScript

// Synchronous code example //
// Filter method works similarly to Ruby array's #filter //

function selectLongWordsSync(arr) {
  return arr.filter(function(word) { return word.length > 5 });
}

var words = ['me', 'you', 'and', 'the', 'company', 'having', 'fun'];
var longWords = selectLongWordsSync(words);

console.log('long words: ' + longWords.join(' '));

console.log('This message should appear last.');

```

The issue of blocking behaviour can be circumvented by writing asynchronous code. It is not a built-in JavaScript feature and has to be implemented by the environment that is running your code (browser, node, _etc_).

Asynchronous code example: I have used _setTimeout()_ method to simulate a call that takes 'long' time to complete. The given pattern for error treatment is found all over Node-land.

```JavaScript

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

```

Note that the results in the console appear in the opposite order from the source code. This is because now the code has _non-blocking_ behaviour.

Both code snippets are included in separate files _sync.js_ and _async.js_. The easiest way to try out the code is to clone the repository run the files:

```bash

node asyncPattern/sync.js
node asyncPattern/async.js

```

Happy coding days!