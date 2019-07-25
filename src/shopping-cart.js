import quidditchProducts from './data/quidditch.js';
import { getOrderTotal } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';
import { toUSD } from '../src/format.js';
import store from './data/store.js';

const tbody = document.getElementById('table-body');
const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const cartItem = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, cartItem);
    tbody.appendChild(dom);
}

const totalCell = document.getElementById('total-cell');

const orderTotal = toUSD(getOrderTotal(shoppingCart, quidditchProducts));

totalCell.textContent = orderTotal;


