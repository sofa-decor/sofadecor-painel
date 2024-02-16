import { APIError } from "../../clients/axios.client";
import ProductsService from "../../services/ProductsService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";
import { Product } from "./getManyProductsHook";

interface UpdateProductHook {
    loading: boolean;
    error: APIError | null;
    post: (data: Partial<Product>) => Promise<void>;
    statusCode: number | null;
    data: { message: string } | null;
}

const service = ProductsService;

export const useUpdateProductHook = (): UpdateProductHook => {
    const {
        loading,
        error,
        act: post,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: (body: Partial<Product>) => service.update(body),
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
