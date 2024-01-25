import { APIError } from "../../clients/axios.client";
import { UserService } from "../../services/UserService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

export type User = {
    id: string;
    username: string;
    role: string;
};

interface GetUserHook {
    loading: boolean;
    error: APIError | null;
    fetch: () => Promise<void>;
    statusCode: number | null;
    data: User | null;
}

const service = new UserService();

export const useGetUserHook = (): GetUserHook => {
    const {
        loading,
        error,
        act: fetch,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: () => service.fecthOne(),
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
