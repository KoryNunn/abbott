# Abbott

Abbott breaks promises. Turns them back into CPS style

## Usage

```javascript
var abbott = require('abbott');

// make a promise
var promise = something();

// break it
var normalAsyncFunction = abbott(somePromise);

// use it
normalAsyncFunction(function(error, data){
    // Welcome back to reality.
});

```

You can also pass a function that returns a promise, and it will give you a nice CPS version:


```javascript
// instead of
somethingThatReturnsAPromise('foo', 'bar').then(successCallback, errorCallback);

// you can do
abbott(somethingThatReturnsAPromise, 'foo', 'bar', callback);

```