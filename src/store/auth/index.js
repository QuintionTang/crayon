import * as auth from "@/services/auth/jwt";
import { notification } from "ant-design-vue";
// action types
export const LOGIN = "login";
export const LOGOUT = "logout";
export const LOAD_ACCOUNT = "loadAccount";

// mutation types
export const SET_LOGIN = "setLogin";
export const SET_LOGOUT = "setLogout";
export const SET_ACCOUNT = "setAccount";
export const SET_READY = "setReady";
export const SET_ERRORS = "setErrors";

const STOAGE_KEY = "crayon";
const USER_KEY = `${STOAGE_KEY}.auth.userinfo`;
const storageHelper = {
    set: (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        const localData = window.localStorage.getItem(key);
        if (localData && localData !== "") {
            return JSON.parse(localData);
        } else {
            return false;
        }
    },
};
const state = {
    account: null,
    authorized: false,
    loading: true,
    errors: null,
};
const getters = {
    accountInfo(state) {
        return state.account;
    },
    errors(state) {
        return state.errors;
    },
};
const actions = {
    [LOAD_ACCOUNT]({ commit }) {
        commit(SET_READY, true);

        const currentAccount = storageHelper.get(USER_KEY);
        commit(SET_ACCOUNT, currentAccount);
    },
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
            authorized: false,
        });
    },
    [SET_ACCOUNT](state, account) {
        account
            ? Object.assign(state, {
                  account,
                  loading: false,
                  authorized: true,
                  errors: null,
              })
            : Object.assign(state, {
                  loading: false,
                  authorized: false,
                  errors: null,
              });
    },
    [SET_LOGIN](state, loginInfo) {
        Object.assign(state, {
            account: loginInfo,
            loading: false,
            authorized: true,
            errors: null,
        });
        storageHelper.set(USER_KEY, loginInfo);
        notification.success({
            message: "登录成功",
            description: "您已成功登录CRAYON管理系统",
        });
    },
};
const authModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
export default authModule;
