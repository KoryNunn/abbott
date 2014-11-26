module.exports = function abbott(promise){
    return function(){
        if(typeof promise === 'function'){
           promise = promise.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        }

        var callback = arguments[arguments.length-1];
        promise.then(callback.bind(null, null), callback);
    };
};