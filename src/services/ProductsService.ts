import { axiosClient, configAuthorization } from "../clients/axios.client";
import { Product, ProductsFilters } from "../hooks/product-hooks/getManyProductsHook";
import { NewProductRequest } from "../types/new-product-request.type";

class ProductsService {
    constructor() {}

    async fetch(filters?: ProductsFilters) {
        let query = "?";
        if (filters?.room) query += `&room=${filters.room}`;
        if (filters?.name) query += `&name=${filters.name}`;
        if (filters?.tags?.length) query += `&tags=${JSON.stringify(filters.tags)}`;
        return axiosClient.get(`/products${query}`);
    }

    async post(data: NewProductRequest) {
        return axiosClient.post("/products", data, configAuthorization());
    }

    async update(data: Partial<Product>) {
        const id = data.id;
        delete data.id;
        return axiosClient.put(`/products/${id}`, data, configAuthorization());
    }

    async delete(id: string) {
        return axiosClient.delete(`/products/${id}`, configAuthorization());
    }
}

export default new ProductsService();
