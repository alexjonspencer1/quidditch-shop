import quidditchProducts from './quidditch.js';
import { findProduct } from '../register.js';

const PRODUCT_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';

const store = {
    storage: window.localStorage,

    save(key, wizard) {
        const json = JSON.stringify(wizard);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const wizard = JSON.parse(json);
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
    getProduct(code) {
        const storeItems = store.getProducts();
        const product = findProduct(storeItems, code);
        return product;
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

        const shoppingCart = store.getShoppingCart();
        const lineItem = findProduct(shoppingCart, code);

        if(lineItem) {
            lineItem.quantity++;
        } 
        else {
            const lineItem = {
                code: code,
                quantity: 1
            };
            
            shoppingCart.push(lineItem);
        }

        store.save(SHOPPING_CART_KEY, shoppingCart);
    },
    addProduct(newItem) {
        const products = store.getProducts();
        console.log(products);
        products.push(newItem);
        store.save(SHOPPING_CART_KEY, products);
    }

};

export default store;