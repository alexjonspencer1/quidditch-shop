import store from '../src/data/store.js';
import quidditchProducts from '../src/data/quidditch.js';

const test = QUnit.test;

QUnit.module('');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
}),

test('Get and Save, a Test.', assert => {

    const key = 'harry potter';
    const harryPotter = { castle: 'hogwarts' };

    store.save(key, harryPotter);
    const got = store.get(key);

    assert.deepEqual(got, harryPotter);

});

test('Bootstrap products if no products present', (assert) => {

    const products = store.getProducts();

    assert.deepEqual(products, quidditchProducts);
});

test('Get shopping cart is empty array', (assert) => {

    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, []);
});

test('Get sales list empty array', (assert) => {
    const salesList = store.getSales();

    assert.deepEqual(salesList, []);
});
//DO THIS ONE WITH THE SALES REPORT ALSO
test('Add product code to empty shopping cart', (assert) => {

    const code = 'nimbus-2000';
    const expected = [{
        code: 'nimbus-2000',
        quantity: 1,
    }];

    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
});

test('add product to sales list to empty shopping cart', (assert) => {
    
    const code = 'nimbus-2000';
    const expected = [{
        code: 'nimbus-2000',
        quantity: 1,
    }];

    store.placeOrder(code);
    const orderList = store.getSales();

    assert.deepEqual(orderList, expected);
});

//ALSO DO THIS ONE FOR THE SALES REPORT
test('Add another item if cart is not empty', (assert) => {

    const code = 'nimbus-2000';
    const expected = [{
        code: 'nimbus-2000',
        quantity: 2,
    }];

    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
});

test('add another item to sales list if not empty', (assert) => {
    
    const code = 'nimbus-2000';
    const expected = [{
        code: 'nimbus-2000',
        quantity: 2,
    }];

    store.placeOrder(code);
    store.placeOrder(code);
    const orderList = store.getSales();

    assert.deepEqual(orderList, expected);
});

test('get product', (assert) => {

    const code = 'nimbus-2000';
    const expected = quidditchProducts[0];

    const item = store.getProduct(code);

    assert.deepEqual(item, expected);
});

test('add product to product list', (assert) => {

    const product = {
        code: 'bludger',
        name: 'Bludger',
        image: 'assets/nimbus-2000.png',
        description: 'A blunt force ball used in quidditch that is the key method of scoring goals',
        category: 'quidditch-tools',
        price: 500.00,
        cost: 100.00
    };

    store.addProduct(product);
    const products = store.getProducts();

    assert.deepEqual(products[products.length - 1], product);
});