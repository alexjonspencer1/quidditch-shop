import quidditchProducts from './quidditch.js';
import { findProduct } from '../register.js';

const PRODUCT_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping-cart';
const SALES_LIST_KEY = 'sales-list';

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
    addProduct(newItem) {
        const products = store.getProducts();
        products.push(newItem);
        store.save(PRODUCT_KEY, products);
        // console.log('product from store.js', products);
    },
    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        
        if(!shoppingCart) {
            store.save(SHOPPING_CART_KEY, []);
            shoppingCart = [];
        }
        return shoppingCart;
    },
    getSales() {
        let salesList = store.get(SALES_LIST_KEY);

        if(!salesList) {
            store.save(SALES_LIST_KEY, []);
            salesList = [];
        }
        return salesList;
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
    placeOrder(code) {
        const shoppingCart = store.getSales();
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

        store.save(SALES_LIST_KEY, shoppingCart);
    }
    
};

export default store;