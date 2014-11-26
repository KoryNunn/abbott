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