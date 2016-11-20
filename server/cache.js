class Cache {
    constructor() {
        this.keys = {};
    }

    set(value, key = '') {
        key = key.toLowerCase();
        if (key) {
            this.keys[key] = value;
        }

        return value;
    }

    del(key = '') {
        key = key.toLowerCase();
        delete this.keys[key];
    }

    get(key = '') {
        key = key.toLowerCase();
        return this.keys[key];
    }

    clear() {
        this.keys = {};
    }

}

let instance = new Cache();

export default instance;
