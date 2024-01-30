import { axiosClient } from "../clients/axios.client";

class CategoryService {
    constructor() {}

    async fetch() {
        return axiosClient.get("/categories");
    }
}

export default new CategoryService();
