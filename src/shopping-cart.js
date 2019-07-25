import order from './data/order.js';
import quidditchProducts from './data/quidditch.js';
import { findProduct, getOrderTotal } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';
import { toUSD } from '../src/format.js';
import store from './data/store.js';

const tbody = document.getElementById('table-body');
const shoppingCartAdd = store.getShoppingCart();

// for(let i = 0; i < order.length; i++) {
//     const lineItem = order[i];
//     const gear = findProduct(quidditchProducts, lineItem.code);
//     const dom = renderLineItem(lineItem, gear);
//     tbody.appendChild(dom);
// }

for(let i = 0; i < shoppingCartAdd.length; i++) {
    const shoppingCartItems = shoppingCartAdd[i];
    const cartItems = store.getProduct(shoppingCartItems.code);
    const dom = renderLineItem(cartItems);
    tbody.appendChild(dom);
}

const totalCell = document.getElementById('total-cell');

const orderTotal = toUSD(getOrderTotal(order, quidditchProducts));
totalCell.textContent = orderTotal;


