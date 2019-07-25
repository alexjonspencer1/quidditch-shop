import quidditchProducts from './quidditch.js';

const PRODUCT_ID = 'products';
const SHOPPING_CART_ID = 'shopping-cart';

const store = {
    storage: window.localStorage,
    save(key, wizard) {
        const json = JSON.stringify(wizard);
        // console.log(JSON.stringify(wizard));
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const wizard = JSON.parse(json);
        // console.log(wizard);
        return wizard;
    },
    getProducts() {
        let products = store.get(PRODUCT_ID);
        if(!products) {
            store.save(PRODUCT_ID, quidditchProducts); 
            products = quidditchProducts;
        }
        return products;
    },
    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_ID);
        if(!shoppingCart) {
            store.save(SHOPPING_CART_ID, []);
            shoppingCart = [];
        }
        return shoppingCart;
    },

};

export default store;