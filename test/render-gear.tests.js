import renderGear from '../src/render-gear.js';

const test = QUnit.test;

QUnit.module('Render Gear');

test('renders gear', assert => {

    const nimbus2000 = {
        code: 'nimbus-2000',
        name: 'Nimbus 2000',
        image: 'assets/nimbus-2000.png',
        description: 'A speedy, nimble, top-of-the-line broomstick',
        category: 'broomstick',
        price: 5000.00,
        cost: 500.00 
    };

    const expected = '<li class="broomstick" title="A speedy, nimble, top-of-the-line broomstick"><h3>Nimbus 2000</h3><img src="assets/nimbus-2000.png" alt="Nimbus 2000 image"><p class="price">$5,000.00<button value="nimbus-2000">Buy!</button></p></li>';
    
    const dom = renderGear(nimbus2000);
    const html = dom.outerHTML;

    assert.equal(html, expected);

});