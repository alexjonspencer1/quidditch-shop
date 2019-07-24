import order from './data/order.js';
import quidditchProducts from './data/quidditch.js';
import { findProduct, getOrderTotal } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';
import { toUSD } from '../src/format.js';

const tbody = document.getElementById('table-body');

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const gear = findProduct(quidditchProducts, lineItem.code);
    const dom = renderLineItem(lineItem, gear);
    tbody.appendChild(dom);
}

const totalCell = document.getElementById('total-cell');

const orderTotal = toUSD(getOrderTotal(order, quidditchProducts));
totalCell.textContent = orderTotal;


