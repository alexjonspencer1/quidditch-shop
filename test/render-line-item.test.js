import quidditchProducts from '../src/data/quidditch.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {

    const lineItem = {
        code: 'nimbus-2000',
        quantity: 2
    };

    const nimbus2000 = findProduct(quidditchProducts, lineItem.code);
    const expected = '<tr><td class="text-align-left">2</td><td class="text-align-left">Nimbus 2000</td><td class="text-align-right">$5,000.00</td><td class="text-align-right">$10,000.00</td></tr>';
    
    const dom = renderLineItem(lineItem, nimbus2000);
    const html = dom.outerHTML;

    assert.equal(html, expected);

});