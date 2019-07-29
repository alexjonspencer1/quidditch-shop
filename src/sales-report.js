import renderSaleItem from '../src/render-sales-report.js';
import store from './data/store.js';

const tbody = document.getElementById('table-body-sales');
const shoppingCart = store.getSales();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const cartItem = store.getProduct(lineItem.code);
    const dom = renderSaleItem(lineItem, cartItem);
    tbody.appendChild(dom);
}
