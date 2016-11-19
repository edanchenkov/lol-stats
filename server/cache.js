class Cache {
    constructor() {
        this.keys = {};
    }

    set(key, value) {
        this.keys[key] = value;
    }

    del(key) {
        delete this.keys[key];
    }

    get(key) {
        return this.keys[key];
    }

}

let instance = new Cache();

export default instance;
