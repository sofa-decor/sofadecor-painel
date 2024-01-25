import axios from "axios";

export type APIError = {
    message: string;
    statusCode: number;
    date: string;
    type: string;
};

export const axiosClient = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    timeout: 10000,
    headers: {
        "Content-type": "application/json",
    },
});

export const configAuthorization = (): object => {
    const token = localStorage.getItem("token");
    return { headers: { authorization: `Bearer ${token}` } };
};
