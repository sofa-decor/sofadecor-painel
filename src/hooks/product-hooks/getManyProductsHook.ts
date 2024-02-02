import { APIError } from "../../clients/axios.client";
import ProductsService from "../../services/ProductsService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

export type Product = {
    id: string;
    name: string;
    description: string;
    images: Image[];
    tags: string[];
    createdAt: Date;
    updatedAt?: Date;
};

export type Image = {
    url: string;
    main: boolean;
};

interface GetManyProductsHook {
    loading: boolean;
    error: APIError | null;
    fetch: () => Promise<void>;
    statusCode: number | null;
    data: { products: Array<Product> } | null;
}

const service = ProductsService;

export const useGetManyProductsHook = (): GetManyProductsHook => {
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
