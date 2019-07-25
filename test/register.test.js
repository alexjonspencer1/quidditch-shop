import quidditchProducts from '../src/data/quidditch.js';
import order from '../src/data/order.js';
import { findProduct, getLineTotal, getOrderTotal } from '../src/register.js';

const test = QUnit.test;

QUnit.module('Register');

test('Find product by product code in quidditch.js', assert => {

    const code = 'nimbus-2000';
    const expected = {
        code: 'nimbus-2000',
        name: 'Nimbus 2000',
        image: 'assets/nimbus-2000.png',
        description: 'A speedy, nimble, top-of-the-line broomstick',
        category: 'broomstick',
        price: 5000.00,
        cost: 500.00
    };
    
    const foundProduct = findProduct(quidditchProducts, code);

    assert.deepEqual(foundProduct, expected);
});

test('Calculate line item total from getLineTotal in register.js', (assert) => {

    const quantity = 4;
    const price = 2000;
    const expected = 8000;

    const total = getLineTotal(quantity, price);

    assert.equal(total, expected);
});

test('Calculate order total', (assert) => {
   
    const expected = 49000;

    const orderTotal = getOrderTotal(order, quidditchProducts);

    assert.equal(orderTotal, expected);
});