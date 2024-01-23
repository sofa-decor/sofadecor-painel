import { APIError } from "../../clients/axios.client";
import ProductsService from "../../services/ProductsService";
import { NewProductRequest } from "../../types/new-product-request.type";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

interface PostProductHook {
    loading: boolean;
    error: APIError | null;
    post: (user: NewProductRequest) => Promise<void>;
    statusCode: number | null;
    data: NewProductRequest | null;
}

const service = ProductsService;

export const usePostProductHook = (): PostProductHook => {
    const {
        loading,
        error,
        act: post,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: (body: NewProductRequest) => service.post(body),
        immediate: false,
    });

    return {
        loading,
        error,
        post,
        data,
        statusCode,
    };
};
