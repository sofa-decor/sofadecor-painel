import { APIError } from "../../clients/axios.client";
import { UserService } from "../../services/UserService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";
import { User } from "./useGetUserHook";

export type fetchUsersParams = {
    name: string;
};

interface GetAllUsersHook {
    loading: boolean;
    error: APIError | null;
    fetch: (data?: fetchUsersParams) => Promise<void>;
    statusCode: number | null;
    data: Array<User> | null;
}

const service = new UserService();

export const useGetAllUsersHook = (): GetAllUsersHook => {
    const {
        loading,
        error,
        act: fetch,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: data => service.fetch(data),
        immediate: true,
    });

    return {
        loading,
        error,
        fetch,
        data,
        statusCode,
    };
};
