import axios from "axios";
import { Environments } from "../types";

export type APIError = {
    message: string;
    statusCode: number;
    date: string;
    type: string;
};

export const axiosClient = axios.create({
    baseURL: Environments.API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-type": "application/json",
    },
});

export const configAuthorization = (): object => {
    const token = localStorage.getItem("token");
    return { headers: { authorization: `Bearer ${token}` } };
};
