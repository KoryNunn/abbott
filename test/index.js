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

test('Works good', function(t){
    t.plan(1);

    abbott(makeAStupidPromise(null, 10))(function(error, data){
        t.equal(data, 10);
    });
});

test('Fails good', function(t){
    t.plan(2);

    abbott(makeAStupidPromise('boom', 10))(function(error, data){
        t.notEqual(data, 10);
        t.equal(error, 'boom');
    });
});

test('promise creator', function(t){
    t.plan(1);

    abbott(makeAStupidPromise)(null, 10, function(error, data){
        t.equal(data, 10);
    });
});

test('Fails good', function(t){
    t.plan(2);

    abbott(makeAStupidPromise)('boom', 10, function(error, data){
        t.notEqual(data, 10);
        t.equal(error, 'boom');
    });
});