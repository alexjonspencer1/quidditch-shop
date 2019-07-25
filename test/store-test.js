import store from '../src/data/store.js';
import quidditchProducts from '../src/data/quidditch.js';

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

test('Bootstrap products if no products present', (assert) => {

    // act
    const products = store.getProducts();

    // assert
    assert.deepEqual(products, quidditchProducts);
});

test('Get shopping cart is empty array', (assert) => {

    // act
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, []);
});

test('Add product code to empty shopping cart', (assert) => {

    //arrange 
    const code = 'nimbus-2000';
    const expected = [{
        code: 'nimbus-2000',
        quantity: 1,
    }];

    // act
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();


    // assert
    assert.deepEqual(shoppingCart, expected);
});
