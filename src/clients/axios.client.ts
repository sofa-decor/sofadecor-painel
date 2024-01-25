import axios from "axios";

const configAuthorization = () => {
    const token = localStorage.getItem("token");
    return `Bearer ${token}`;
};

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
        Authorization: configAuthorization(),
    },
});
