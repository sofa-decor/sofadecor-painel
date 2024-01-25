import { axiosClient, configAuthorization } from "../clients/axios.client";

export class UserService {
    constructor() {}

    fecthOne() {
        return axiosClient.get(`/users/user`, configAuthorization());
    }

    fetch() {
        return axiosClient.get(`/users`, configAuthorization());
    }

    delete(userId: string) {
        return axiosClient.delete(`/users/${userId}`, configAuthorization());
    }
}
