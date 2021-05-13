import apiClient from "@/services/axios";

export async function products(payload) {
    const { orderby, sort, offset, limit, filter } = payload;
    return apiClient
        .get("/api/v1/ecommerce/products", {
            params: { orderby, sort, offset, limit },
            filter,
        })
        .then((response) => {
            return response;
        });
}
