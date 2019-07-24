import { getLineTotal } from './register.js';

function renderLineItem(lineItem, quidditchProducts) {

    const tr = document.createElement('tr');

    const quantityCell = document.createElement('th');
    quantityCell.className = 'text-align-left';
    tr.appendChild(quantityCell);
    // quantityCell.textContent = quidditchProducts.quantity;
    // tr.appendChild(quantityCell);








    return tr;

}

export default renderLineItem;