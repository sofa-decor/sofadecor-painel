import { APIError } from "../../clients/axios.client";
import { UserService } from "../../services/UserService";
import useAsyncAxiosHook from "../useAsyncAxiosHook";
import { User } from "./useGetUserHook";

interface PostUserHook {
    loading: boolean;
    error: APIError | null;
    post: (user: UserRequest) => Promise<void>;
    statusCode: number | null;
    data: User | null;
}

export type UserRequest = {
    username: string;
    role: string;
    password: string;
};

const service = new UserService();

export const usePostUserHook = (): PostUserHook => {
    const {
        loading,
        error,
        act: post,
        data,
        status: statusCode,
    } = useAsyncAxiosHook({
        request: body => service.post(body),
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
