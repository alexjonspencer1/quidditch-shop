export function findProduct(quidditchProducts, code) {
    for(let i = 0; i < quidditchProducts.length; i++) {
        const gear = quidditchProducts[i];
        if(gear.code === code) {
            return gear;
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
        let cartLoop = cart[i].code;
        let itemData = findProduct(quidditchProducts, cartLoop); 
        orderTotal = orderTotal + getLineTotal(itemData.price, cart[i].quantity);
    }
    return orderTotal;
    
}

