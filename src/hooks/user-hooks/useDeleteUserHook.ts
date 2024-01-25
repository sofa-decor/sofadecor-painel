import { APIError } from "../../clients/axios.client";
import { UserService } from "../../services/UserService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

interface DeleteUserHook {
    loading: boolean;
    error: APIError | null;
    remove: (id: string) => Promise<void>;
    statusCode: number | null;
    data: { id: string } | null;
}

const service = new UserService();

export const useDeleteUserHook = (): DeleteUserHook => {
    const {
        loading,
        error,
        act: remove,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: id => service.delete(id),
        immediate: false,
    });

    return {
        loading,
        error,
        remove,
        data,
        statusCode,
    };
};
