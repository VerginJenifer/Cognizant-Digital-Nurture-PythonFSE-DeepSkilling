import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});
apiClient.interceptors.request.use(
    (config) => {
        config.headers.Authorization = "Bearer mock-token-12345";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const standardError = new Error(
            error.response?.data?.message || "Something went wrong"
        );

        standardError.statusCode = error.response?.status || 500;

        throw standardError;
    }
);

export default apiClient;