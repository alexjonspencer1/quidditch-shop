
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
    }

};

export default store;