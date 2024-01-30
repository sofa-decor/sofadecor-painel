import { APIError } from "../../clients/axios.client";
import CategoryService from "../../services/CategoryService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

export type Category = {
    name: string;
    tags: string[];
    createdAt: Date;
    updatedAt?: Date;
};

interface GetManyCategoriesHook {
    loading: boolean;
    error: APIError | null;
    fetch: () => Promise<void>;
    statusCode: number | null;
    data: Array<Category> | null;
}

const service = CategoryService;

export const useGetManyCategoriesHook = (): GetManyCategoriesHook => {
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
