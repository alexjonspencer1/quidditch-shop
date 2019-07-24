import quidditchProducts from '../src/data/quidditch.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange

    const lineItem = {
        code: 'nimbus-2000',
        quantity: 1
    };

    const nimbus2000 = findProduct(quidditchProducts, lineItem.code);
    const expected = '<tr><th class="text-align-left">2</th><th class="text-align-left">Nimbus 2000</th><th class="text-align-right">$5,000</th><th class="text-align-right">$10,000</th></tr>';

    // act
    
    const dom = renderLineItem(lineItem, nimbus2000);
    const html = dom.outerHTML;

    // assert

    assert.equal(html, expected);

});