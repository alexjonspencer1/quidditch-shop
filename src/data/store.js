import quidditchProducts from './quidditch.js';

const PRODUCT_IDENTIFIER = 'products';

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
        let products = store.get(PRODUCT_IDENTIFIER);
        if(!products) {
            store.save(PRODUCT_IDENTIFIER, quidditchProducts); 
            products = quidditchProducts;
        }
        return products;
    },

};

export default store;