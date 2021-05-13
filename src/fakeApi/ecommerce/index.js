import mock from "../mock";
import fakeDbApi from "../db/index";
const formatRequest = (request) => {
    const { data, method, params } = request;
    return {
        data: data ? JSON.parse(data) : null,
        params,
        method,
    };
};
mock.onGet("/api/v1/ecommerce/products").reply((request) => {
    const { params } = formatRequest(request);

    const list = fakeDbApi.products(params);
    return [
        200,
        {
            code: 0,
            ...list,
        },
    ];
});
