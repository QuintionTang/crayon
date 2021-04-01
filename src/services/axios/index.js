import axios from "axios";
import { notification } from "ant-design-vue";
import router from "@/router";

const apiClient = axios.create({
    baseURL: "/api/v1",
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

apiClient.interceptors.request.use((request) => {
    // const accessToken = store.get("accessToken");
    // if (accessToken) {
    //     request.headers.Authorization = `Bearer ${accessToken}`;
    //     request.headers.AccessToken = accessToken;
    // }
    let { params, filter } = request;
    if (filter) {
        params = Object.assign({}, params, filter);
        request.params = params;
    }

    return request;
});
// interceptors 拦截器
apiClient.interceptors.response.use(
    (response) => {
        const { data, headers } = response;
        if (data instanceof ArrayBuffer) {
            return {
                blobData: data,
                fileName: ((strDispostion) => {
                    if (
                        strDispostion &&
                        strDispostion !== "" &&
                        strDispostion.split("=UTF-8''").length > 1
                    ) {
                        return decodeURIComponent(
                            strDispostion.split("=UTF-8''")[1]
                        );
                    } else {
                        return "blob data";
                    }
                })(headers["content-disposition"]),
            };
        } else {
            if (data.code === 0) {
                if (Number.isFinite(data.total_count)) {
                    return {
                        data: data.data,
                        ...data,
                    };
                } else {
                    return data.data || data;
                }
            } else {
                return Promise.reject(data);
            }
        }
    },
    (error) => {
        // Errors handling
        let message = "";
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    message = "未登录";
                    router.push("/auth/login");
                    break;
                case 404:
                    message = "没找到相应页面";
                    break;
                default:
                    message = error.response.data || "系统错误";
                    break;
            }
        } else {
            message = error;
        }
        notification.warning({
            message: message,
        });
    }
);

export default apiClient;
