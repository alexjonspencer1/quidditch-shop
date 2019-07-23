function renderGear(gear) {

    const li = document.createElement('li');
    li.className = gear.category;
    li.title = gear.description;

    const h3 = document.createElement('h3');
    h3.textContent = gear.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = gear.image;
    img.alt = gear.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = gear.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // p.textContent = usd;
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Buy!';
    button.value = gear.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;

}

export default renderGear;