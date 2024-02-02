import { axiosClient } from "../clients/axios.client";

class CategoryService {
    constructor() {}

    async fetch() {
        return axiosClient.get("/categories");
    }

    async fetchByName(name: string) {
        return axiosClient.get(`/categories/${name}`);
    }
}

export default new CategoryService();
