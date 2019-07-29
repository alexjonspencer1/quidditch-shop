import store from './/data/store.js';
import renderGear from './render-gear.js';

const list = document.getElementById('gear');

const quidditchProducts = store.getProducts();

for(let i = 0; i < quidditchProducts.length; i++) {
    const gear = quidditchProducts[i];
    const dom = renderGear(gear);
    list.appendChild(dom);
}
