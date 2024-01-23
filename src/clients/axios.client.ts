import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    timeout: 10000,
    headers: {
        "Content-type": "application/json",
    },
});

export type APIError = {
    message: string;
    statusCode: number;
    date: string;
    type: string;
};
