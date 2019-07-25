import order from './data/order.js';
import quidditchProducts from './data/quidditch.js';
import { findProduct, getOrderTotal } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';
import { toUSD } from '../src/format.js';
import store from './data/store.js';

const tbody = document.getElementById('table-body');
const shoppingCart = store.getShoppingCart();
console.log("scart", shoppingCart);

// for(let i = 0; i < order.length; i++) {
//     const lineItem = order[i];
//     const gear = findProduct(quidditchProducts, lineItem.code);
//     const dom = renderLineItem(lineItem, gear);
//     tbody.appendChild(dom);
// }

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const cartItem = store.getProduct(lineItem.code);
    // console.log("cart items", cartItem);
    const dom = renderLineItem(lineItem, cartItem);
    tbody.appendChild(dom);
}

const totalCell = document.getElementById('total-cell');

const orderTotal = toUSD(getOrderTotal(shoppingCart, quidditchProducts)); //made some changes here

totalCell.textContent = orderTotal;


