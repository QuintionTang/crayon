import * as ecommerce from "../../services/ecommerce";
// action types
export const GET_PRODUCTS = "getProducts";

// mutation types
export const SET_PRODUCTS = "setProducts";
export const SET_READY = "setReady";
export const SET_ERRORS = "setErrors";

const state = {
    list: [],
    loading: true,
    errors: null,
    current: {},
    pagination: {
        pageSize: 5,
        current: 1,
        total: 0,
    },
};
const getters = {
    list(state) {
        return state.list;
    },
    errors(state) {
        return state.errors;
    },
    loading(state) {
        return state.loading;
    },
};
const actions = {
    [GET_PRODUCTS]({ commit }, payload) {
        commit(SET_READY, true);
        ecommerce
            .products(payload)
            .then((response) => {
                commit(SET_PRODUCTS, response);
            })
            .catch((errors) => {});
    },
};
const mutations = {
    [SET_READY](state, isReady) {
        Object.assign(state, {
            loading: isReady,
            errors: null,
        });
    },
    [SET_ERRORS](state, { loading, errors }) {
        Object.assign(state, {
            loading,
            errors,
        });
    },
    [SET_PRODUCTS](state, response) {
        const { data, total } = response;
        Object.assign(state, {
            list: data,
            loading: false,
            pagination: {
                total,
                ...state.pagination,
            },
        });
    },
};
const ecommerceModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
export default ecommerceModule;
