import mock from "../mock";
import fakeDbApi from "../db/index";
const formatRequest = (request) => {
    const { data, method } = request;
    return {
        data: JSON.parse(data),
        method,
    };
};
mock.onPost("/api/v1/auth/login").reply((request) => {
    const { data } = formatRequest(request);
    const { username, password } = data;
    const authUserInfo = fakeDbApi.checkAuth(username, password);
    const error = authUserInfo ? "" : "用户登录失败，请稍后再试";
    if (authUserInfo) {
        return [200, { code: 0, data: authUserInfo }];
    }
    return [401, error];
});
