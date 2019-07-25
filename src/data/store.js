import quidditchProducts from './quidditch.js';
import { findProduct } from '../register.js';

const PRODUCT_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';

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
        let products = store.get(PRODUCT_KEY);
        if(!products) {
            store.save(PRODUCT_KEY, quidditchProducts); 
            products = quidditchProducts;
        }
        return products;
    },
    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if(!shoppingCart) {
            store.save(SHOPPING_CART_KEY, []);
            shoppingCart = [];
        }
        return shoppingCart;
    },
    orderProduct(code) {

        // get shopping cart 

        const shoppingCart = store.getShoppingCart();

        // get code for product 

        const productFromCode = findProduct(quidditchProducts, code);
        console.log(productFromCode);

        // push code into shopping cart array 
        const lineItem = {
            code: 'nimbus-2000',
            quantity: 1
        };

        shoppingCart.push(lineItem);
        
        // save shopping cart back to storage
    }

};

export default store;