var test = require('tape'),
    Q = require('q'),
    abbott = require('../');

function makeAStupidPromise(error, data) {
    return Q.Promise(function(resolve, reject) {
        setTimeout(function(){
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        },10);
    });
}

test('Break a promise with success', function(t){
    t.plan(1);

    abbott(makeAStupidPromise(null, 10))(function(error, data){
        t.equal(data, 10);
    });
});

test('Break a promise with error', function(t){
    t.plan(2);

    abbott(makeAStupidPromise('boom', 10))(function(error, data){
        t.notEqual(data, 10);
        t.equal(error, 'boom');
    });
});

test('Break a lazily created promise with success', function(t){
    t.plan(1);

    abbott(makeAStupidPromise)(null, 10, function(error, data){
        t.equal(data, 10);
    });
});

test('Break a lazily created promise with error', function(t){
    t.plan(2);

    abbott(makeAStupidPromise)('boom', 10, function(error, data){
        t.notEqual(data, 10);
        t.equal(error, 'boom');
    });
});

test('Attempt to do something other than break a promise', function(t){
    t.plan(1);

    function aUsefullTask(callback){
        callback(null, 'usefull result');
    }

    t.throws(function(){
        abbott(aUsefullTask)();
    });
});

test('Abbott without a promise to break', function(t){
    t.plan(1);

    t.throws(function(){
        abbott({'not': 'a promise'})(null, 20, function(error, data){
            t.fail();
        });
    });
});