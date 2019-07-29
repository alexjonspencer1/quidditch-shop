// import quidditchProducts from './data/quidditch.js';
// import { getOrderTotal } from '../src/register.js';
// import { toUSD } from '../src/format.js';
import renderSaleItem from '../src/render-sales-report.js';
import store from './data/store.js';

const tbody = document.getElementById('table-body-sales');
const shoppingCart = store.getSales();
// const quidditchProducts = store.getProducts();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const cartItem = store.getProduct(lineItem.code);
    const dom = renderSaleItem(lineItem, cartItem);
    tbody.appendChild(dom);
}

// Leave in for reference

// const totalCell = document.getElementById('total-cell');
// const orderTotal = toUSD(getOrderTotal(shoppingCart, quidditchProducts));
// totalCell.textContent = orderTotal;


