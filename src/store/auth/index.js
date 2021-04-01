import * as auth from "@/services/auth/jwt";
import { notification } from "ant-design-vue";
// action types
export const LOGIN = "login";
export const LOGOUT = "logout";
export const LOGIN_INFO = "loginInfo";

// mutation types
export const SET_LOGIN = "setLogin";
export const SET_LOGOUT = "setLogout";
export const SET_LOGININFO = "setLoginInfo";
export const SET_READY = "setReady";
export const SET_ERRORS = "setErrors";

const state = {
    account: {
        username: "",
        avatar: "",
        email: "",
    },
    authorized: false,
    loading: true,
    errors: null,
};
const getters = {
    loginInfo(state) {
        return state.account;
    },
    errors(state) {
        return state.errors;
    },
};
const actions = {
    [LOGIN]({ commit }, payload) {
        const { username, password } = payload;
        commit(SET_READY, true);
        auth.login(username, password)
            .then((response) => {
                commit(SET_READY, false);
                commit(SET_LOGIN, response);
            })
            .catch((errors) => {
                commit(SET_ERRORS, {
                    loading: false,
                    errors: errors,
                });
            });
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
        state.errors = errors;
    },
    [SET_LOGIN](state, loginInfo) {
        Object.assign(state, {
            account: loginInfo,
            loading: false,
            authorized: loginInfo.authorized,
            errors: null,
        });
        notification.success({
            message: "登录成功",
            description: "您已成功登录CRAYON管理系统",
        });
    },
};
const authModule = {
    state,
    actions,
    mutations,
    getters,
};
export default authModule;
