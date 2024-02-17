import { axiosClient, configAuthorization } from "../clients/axios.client";
import { Product, ProductsFilters } from "../hooks/product-hooks/getManyProductsHook";
import { NewProductRequest } from "../types/new-product-request.type";

class ProductsService {
    constructor(private fetchQueryParams: string = "") {}

    async fetch(filters: Partial<ProductsFilters>) {
        this.formatFetchQueryParams(filters);
        return axiosClient.get(`/products${this.fetchQueryParams}`);
    }

    private formatFetchQueryParams({
        name,
        currentPage,
        itemsAmount,
        tags,
    }: Partial<ProductsFilters>) {
        let query = "?";
        if (name) query += `&name=${name}`;
        if (currentPage) query += `&page=${currentPage}`;
        if (itemsAmount) query += `&amount=${itemsAmount}`;
        if (tags?.length) query += `&tags=${JSON.stringify(tags)}`;
        this.fetchQueryParams = query;
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
