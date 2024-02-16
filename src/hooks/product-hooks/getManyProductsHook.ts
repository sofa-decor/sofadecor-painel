import { APIError } from "../../clients/axios.client";
import ProductsService from "../../services/ProductsService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

export type Product = {
    id: string;
    name: string;
    description: string;
    images: Image[];
    tags: string[];
    rooms: string[];
    createdAt: Date;
    updatedAt?: Date;
};

export type Image = {
    url: string;
    main: boolean;
};

export type ProductsFilters = {
    room?: string;
    name?: string;
    tags?: string[];
};

interface GetManyProductsHook {
    loading: boolean;
    error: APIError | null;
    fetch: (filters?: ProductsFilters) => Promise<void>;
    statusCode: number | null;
    data: { products: Array<Product> } | null;
}

const service = ProductsService;

export const useGetManyProductsHook = (immediate: boolean = true): GetManyProductsHook => {
    const {
        loading,
        error,
        act: fetch,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: data => service.fetch(data),
        immediate: immediate,
    });

    return {
        loading,
        error,
        fetch,
        data,
        statusCode,
    };
};
