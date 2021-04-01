import apiClient from "@/services/axios";

export async function login(username, password) {
    return apiClient
        .post("/auth/login", {
            username,
            password,
        })
        .then((response) => {
            return response;
        });
}

export async function currentAccount() {
    return apiClient.get("/auth/info").then((response) => {
        return response;
    });
}

export async function logout() {
    return apiClient.post("/auth/logout").then((response) => {
        return response;
    });
}
