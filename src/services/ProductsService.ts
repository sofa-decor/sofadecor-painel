import { axiosClient } from "../clients/axios.client";
import { ProductsFilters } from "../hooks/product-hooks/getManyProductsHook";
import { NewProductRequest } from "../types/new-product-request.type";

class ProductsService {
    constructor() {}

    async fetch(filters?: ProductsFilters) {
        let query = "?";
        if (filters?.room) query += `room=${filters.room}`;
        return axiosClient.get(`/products${query}`);
    }

    async post(data: NewProductRequest) {
        return axiosClient.post("/products", data);
    }

    async delete(id: string) {
        return axiosClient.delete(`/products/${id}`);
    }
}

export default new ProductsService();
