function checkIfPromise(promise){
    if(!promise || typeof promise !== 'object' || typeof promise.then !== 'function'){
        throw "Abbott requires a promise to break. It is the only thing Abbott is good at.";
    }
}

module.exports = function abbott(promise){
    if(typeof promise !== 'function'){
        checkIfPromise(promise);
    }

    return function(){
        if(typeof promise === 'function'){
           promise = promise.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        }
        
        checkIfPromise(promise);

        var callback = arguments[arguments.length-1];
        promise.then(callback.bind(null, null), callback);
    };
};