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

export type PaginationState = {
    itemsAmount: number;
    currentPage: number;
    totalPages: number;
};

export type ProductsFilters = {
    name?: string;
    tags?: string[];
} & Partial<Omit<PaginationState, "totalPages">>;

interface GetManyProductsHook {
    loading: boolean;
    error: APIError | null;
    fetch: (filters?: ProductsFilters) => Promise<void>;
    statusCode: number | null;
    data: {
        products: Array<Product>;
        totalPages: number;
        page: number;
        totalItems: number;
    } | null;
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
        request: d => service.fetch(d),
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
