import { getLineTotal } from './register.js';
import { toUSD } from '../src/format.js';

function renderLineItem(lineItem, gear){
    
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'text-align-left';
    nameCell.textContent = gear.name;
    tr.appendChild(nameCell);

    const classCell = document.createElement('td');
    classCell.className = 'text-align-right';
    classCell.textContent = lineItem.quantity;
    tr.appendChild(classCell);

    const priceCell = document.createElement('td');
    priceCell.className = 'text-align-right';
    priceCell.textContent = toUSD(gear.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'text-align-right';
    const total = getLineTotal(lineItem.quantity, gear.price);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}
export default renderLineItem;