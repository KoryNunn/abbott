module.exports = function abbott(promise){
    return function(){
        var callback = arguments[arguments.length-1];
        promise.then(callback.bind(null, null), callback);
    };
};