import { APIError } from "../../clients/axios.client";
import AuthService from "../../services/AuthService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";

export type LoginUser = {
    username: string;
    password: string;
};

interface LoginUserHook {
    loading: boolean;
    error: APIError | null;
    login: (data: LoginUser) => Promise<void>;
    statusCode: number | null;
    data: { token: string } | null;
}

const service = AuthService;

export const useLoginUserHook = (): LoginUserHook => {
    const {
        loading,
        error,
        act: login,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: body => service.post(body),
        immediate: false,
    });

    return {
        loading,
        error,
        login,
        data,
        statusCode,
    };
};
