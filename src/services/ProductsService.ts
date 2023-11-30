import * as productsData from "../data/Products";

class ProductsService {
    private products = productsData.products;

    constructor() {}

    async fetch() {
        return this.products;
    }

    async fetchByName(name: string) {
        const lowerName = name.toLowerCase();
        const found = this.products.find(
            ({ name }) => name.toLowerCase() === lowerName
        );
        if (found) return found;
        else return null;
    }
}

export default new ProductsService();
