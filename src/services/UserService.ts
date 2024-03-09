import { axiosClient, configAuthorization } from "../clients/axios.client";
import { fetchUsersParams } from "../hooks/user-hooks/useGetAllUsersHook";
import { UserRequest } from "../hooks/user-hooks/usePostUserHook";

export class UserService {
    constructor() {}

    fecthOne() {
        return axiosClient.get(`/users/user`, configAuthorization());
    }

    fetch(data?: fetchUsersParams) {
        let query = `/users?`;
        if (data && data.name) query += `&name=${data.name}`;
        return axiosClient.get(query, configAuthorization());
    }

    delete(userId: string) {
        return axiosClient.delete(`/users/${userId}`, configAuthorization());
    }

    post(user: UserRequest) {
        return axiosClient.post("/users", user, configAuthorization());
    }
}
