export function findProduct(items, code) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item.code === code) {
            return item;
        }
    }
    return null;
}

export function getLineTotal(quantity, price) {
    const variable = Number((quantity * price).toFixed(2));
    return variable;
}

export function getOrderTotal(cart, quidditchProducts) {

    let orderTotal = 0;

    for(let i = 0; i < cart.length; i++) {
        console.log(cart);
        let cartLoop = cart[i].code;
        let itemData = findProduct(quidditchProducts, cartLoop); 
        console.log(itemData);
        orderTotal = orderTotal + getLineTotal(itemData.price, cart[i].quantity);
    }
    return orderTotal;
    
}

