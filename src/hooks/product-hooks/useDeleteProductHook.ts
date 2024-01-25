import { APIError } from "../../clients/axios.client";
import ProductsService from "../../services/ProductsService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

interface DeleteProductHook {
    loading: boolean;
    error: APIError | null;
    remove: (id: string) => Promise<void>;
    statusCode: number | null;
    data: { id: string } | null;
}

const service = ProductsService;

export const useDeleteProductHook = (): DeleteProductHook => {
    const {
        loading,
        error,
        act: remove,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: (id: string) => service.delete(id),
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
