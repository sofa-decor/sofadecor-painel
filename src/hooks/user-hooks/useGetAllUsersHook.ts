import { APIError } from "../../clients/axios.client";
import { UserService } from "../../services/UserService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

export type User = {
    id: string;
    name: string;
    role: string;
};

interface GetAllUsersHook {
    loading: boolean;
    error: APIError | null;
    fetch: () => Promise<void>;
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
        request: () => service.fetch(),
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
