import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
}),

test('Get and Save, a Test.', assert => {

    // arrange 

    const key = 'harry potter';
    const harryPotter = { castle: 'hogwarts' };

    //act 

    store.save(key, harryPotter);
    const got = store.get(key);

    // assert
    assert.deepEqual(got, harryPotter);

});