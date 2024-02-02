import { APIError } from "../../clients/axios.client";
import CategoryService from "../../services/CategoryService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";
import { Category } from "./getManyCategoriesHook";

interface GetCategoryByNameHook {
    loading: boolean;
    error: APIError | null;
    fetch: (name: string) => Promise<void>;
    statusCode: number | null;
    data: Category | null;
}

const service = CategoryService;

export const useGetCategoryByNameHook = (): GetCategoryByNameHook => {
    const {
        loading,
        error,
        act: fetch,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: name => service.fetchByName(name),
        immediate: false,
    });

    return {
        loading,
        error,
        fetch,
        data,
        statusCode,
    };
};
