import { axiosClient } from "../clients/axios.client";
import * as productsData from "../data/Products";
import { NewProductRequest } from "../types/new-product-request.type";

class ProductsService {
    private products = productsData.products;

    constructor() {}

    async fetch() {
        return this.products;
    }

    async post(data: NewProductRequest) {
        return axiosClient.post("/products", data);
    }
}

export default new ProductsService();
