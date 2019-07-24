export function findProduct(quidditchProducts, code) {
    for(let i = 0; i < quidditchProducts.length; i++) {
        const gear = quidditchProducts[i];
        if(gear.code = code) {
            return gear;
        }
    }
    return null;
}

export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

export function getOrderTotal() {

}

