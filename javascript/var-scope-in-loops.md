### Variable scope in loops
#### Or why does my loop only use the last value?

Classic example of when we might run into issues - for loop which calls asynchonous function.

```javascript

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 500);
}

// Output: 5, 5, 5, 5, 5

```

The result stems from the fact that within each callback the exact same i object is being referenced. It is inherent in how closures treat variables declared in the outside scope. Rather than creating a copy of the object it stores only the reference to the original object. Thus the solution is to create a locally defined variable to store the value of iteration.

Solution 1: use IIFE to create new scope for each iteration.

```javascript

for (var i = 0; i < 5; i++) {
  (function() {
    var l = i;
    setTimeout(function() {
      console.log(r);
    }, 500);
  })();
}

```

It wouldn't work by simply assigning i to l and not creating a new scope. Think about variable hoisting too.

Solution 2: in ES2015 let keyword creates variable local to the code block (anything between curly braces) rather than just function block.

```javascript

for (var i = 0; i < 5; i++) {
  let l = i;
  setTimeout(function() {
    console.log(l);
  }, 500);
}

```

Solution 3: leverage the fact that catch block has it's own scope. The methodology is used in javascript transpilers.

```javascript
for (var i = 0; i < 5; i++) {
  try { throw i }
  catch (l) {
    setTimeout(function() {
      console.log(l);
    }, 500);
  }
}

```

Read more about it in this [blog post](http://blog.dmbcllc.com/why-does-javascript-loop-only-use-last-value/).