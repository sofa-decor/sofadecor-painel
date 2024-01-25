import { axiosClient } from "../clients/axios.client";

export class UserService {
    constructor() {}

    fecthOne() {
        return axiosClient.get(`/users/user`);
    }

    fetch() {
        return axiosClient.get(`/users`);
    }
}
