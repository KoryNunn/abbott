# Abbott

Abbott breaks promises. Turns them back into CPS style

## Usage

```javascript

// make a promise
var promise = something();

// break it
var normalAsyncFunction = abbott(somePromise);

// use it
normalAsyncFunction(function(error, data){
    // Welcome back to reality.
});

```