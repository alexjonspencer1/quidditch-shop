import quidditchProducts from './/data/quidditch.js';
import renderGear from './render-gear.js';

const list = document.getElementById('gear');

for(let i = 0; i < quidditchProducts.length; i++) {
    const gear = quidditchProducts[i];
    const dom = renderGear(gear);
    list.appendChild(dom);
}