import { axiosClient } from "../clients/axios.client";
import { NewProductRequest } from "../types/new-product-request.type";

class ProductsService {
    constructor() {}

    async post(data: NewProductRequest) {
        return axiosClient.post("/login", data);
    }
}

export default new ProductsService();
