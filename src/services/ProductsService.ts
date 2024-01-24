import { axiosClient } from "../clients/axios.client";
import { NewProductRequest } from "../types/new-product-request.type";

class ProductsService {
    constructor() {}

    async fetch() {
        return axiosClient.get("/products");
    }

    async post(data: NewProductRequest) {
        return axiosClient.post("/products", data);
    }
}

export default new ProductsService();
