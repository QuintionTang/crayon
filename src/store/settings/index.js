export const UPDATE_SETTINGS = "update";
export const SET_SETTINGS = "setSettings";
export const SETUP_URL_SETTINGS = "setupUrlSettings";

const STORED_SETTINGS = (storedSettings) => {
    const settings = {};

    Object.keys(storedSettings).forEach((key) => {
        const item = window.localStorage.getItem(`crayon.settings.${key}`);
        settings[key] =
            typeof item !== "undefined" ? item : storedSettings[key];
    });
    return settings;
};
const state = {
    ...STORED_SETTINGS({
        isSidebarOpen: false,
        isMobileView: false,
        isMobileMenuOpen: false,
        isMenuCollapsed: false,
        routerAnimation: "slide-fadein-up", // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
        isMenuUnfixed: false,
        isMenuShadow: false,
        isTopbarFixed: true,
        isGrayTopbar: false,
        isContentMaxWidth: false,
        isAppMaxWidth: false,
        isGrayBackground: true,
        isCardShadow: true,
        isSquaredBorders: true,
        isBorderless: false,
        isFooterDark: false,
    }),
};
const actions = {
    [UPDATE_SETTINGS]({ commit }, payload) {
        commit(SET_SETTINGS, payload);
    },
};
const mutations = {
    [SET_SETTINGS](state, payload) {
        window.localStorage.setItem(
            `crayon.settings.${payload.setting}`,
            payload.value
        );
        state[payload.setting] = payload.value;
    },
    [SETUP_URL_SETTINGS](state, payload) {
        let queryParams = payload;
        let keys = false;
        if (payload.redirect) {
            const str = payload.redirect;
            const subs = str.substring(str.indexOf("?") + 1);
            if (str.indexOf("?") >= 0) {
                queryParams = JSON.parse(
                    '{"' +
                        decodeURI(subs)
                            .replace(/"/g, '\\"')
                            .replace(/&/g, '","')
                            .replace(/=/g, '":"') +
                        '"}'
                );
            }
        }
        delete queryParams.redirect;
        keys = Object.keys(queryParams);
        if (keys.length) {
            keys.forEach((key) => {
                let value;
                switch (queryParams[key]) {
                    case "false":
                        value = false;
                        break;
                    case "true":
                        value = true;
                        break;
                    default:
                        value = queryParams[key];
                        break;
                }
                if (key in state) {
                    state[key] = value;
                }
            });
        }
    },
};
const getters = {
    state: (state) => state,
};
const settingsModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
export default settingsModule;
