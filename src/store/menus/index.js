import MenusData from "./data";

export const UPDATE_ACTIVE_SUBMENU_KEY = "setActiveSubmenuKey";
export const SET_ACTIVE_SUBMENU_KEY = "setActiveSubmenuKey";

const state = {
    menus: MenusData,
    activeSubmenuKey: null,
    activeItem: null,
};
const getters = {
    menus(state) {
        return state.menus;
    },
};
const actions = {
    [UPDATE_ACTIVE_SUBMENU_KEY]({ commit }, payload) {
        const { key } = payload;
        commit(SET_ACTIVE_SUBMENU_KEY, key);
    },
};
const mutations = {
    [SET_ACTIVE_SUBMENU_KEY](state, key) {
        const { activeSubmenuKey } = state;

        Object.assign(state, {
            activeSubmenuKey: activeSubmenuKey === key ? "" : key,
        });
    },
};
const menusModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

export default menusModule;
