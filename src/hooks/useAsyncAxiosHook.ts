/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError, AxiosPromise } from "axios";
import { useEffect, useState } from "react";
import { APIError } from "../clients/axios.client";

interface UseAsyncAxiosParams {
    request: (...data: any) => AxiosPromise;
    immediate?: boolean;
}

export default function useAsyncAxiosHook({ request, immediate = true }: UseAsyncAxiosParams) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState<APIError | null>(null);
    const [status, setStatus] = useState<number | null>(null);

    const act = async (...args: any) => {
        setLoading(true);
        setError(null);

        try {
            const response = await request(...args);
            setData(response.data);
            setStatus(response.status);
        } catch (e: unknown) {
            const err: AxiosError = e as AxiosError;
            setError((err?.response?.data as APIError) || null);
            setStatus(err?.response?.status || null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (immediate) act();
    }, []);

    return {
        data,
        loading,
        error,
        status,
        act,
    };
}
