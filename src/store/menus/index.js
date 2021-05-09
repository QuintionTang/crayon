import MenusData from "./data";
import { deepCopy } from "@/helper/index.js";
export const UPDATE_ACTIVE_SUBMENU_KEY = "setActiveSubmenuKey";
export const CURRENT_ROUTE = "currentRoute";
export const SET_ACTIVE_SUBMENU_KEY = "setActiveSubmenuKey";
export const SET_CURRENT_ROUTE = "setCurrentRoute";

const state = {
    menus: MenusData,
    activeSubmenuKey: null,
    activeItem: null,
    activeKey: null,
    breadcrumb: null,
};
const getters = {
    menus(state) {
        return state.menus;
    },
    getActiveItem(state) {
        return state.currentRoute;
    },
    breadcrumb(state) {
        return state.breadcrumb;
    },
};
const findActiveKey = (items, route) => {
    const { path } = route;
    const findReduce = (findedItem, current) => {
        const subItems = current.children;
        const url = current.url;
        if (url === path) {
            findedItem.push(current);
        }
        if (Array.isArray(subItems)) {
            return subItems.reduce(findReduce, findedItem);
        }
        return findedItem;
    };
    const result = items.reduce(findReduce, []);
    return result.length > 0 ? result[0] : null;
};
const actions = {
    [UPDATE_ACTIVE_SUBMENU_KEY]({ commit }, payload) {
        const { key } = payload;
        commit(SET_ACTIVE_SUBMENU_KEY, key);
    },
    [CURRENT_ROUTE]({ commit }, payload) {
        commit(SET_CURRENT_ROUTE, payload);
    },
};
const mutations = {
    [SET_ACTIVE_SUBMENU_KEY](state, key, isClick = true) {
        if (isClick) {
            const { activeSubmenuKey } = state;

            Object.assign(state, {
                activeSubmenuKey: activeSubmenuKey === key ? "" : key,
            });
        } else {
            Object.assign(state, {
                activeSubmenuKey: key,
            });
        }
    },
    [SET_CURRENT_ROUTE](state, currentRoute) {
        const copyMenus = deepCopy(state.menus);
        const currentItem = findActiveKey(copyMenus, currentRoute);
        if (currentItem) {
            const activeSubmenuKey = currentItem.parentKey;
            mutations[SET_ACTIVE_SUBMENU_KEY](state, activeSubmenuKey, false);

            const item = copyMenus.find((item) => {
                return item.key === activeSubmenuKey;
            });
            Object.assign(state, {
                breadcrumb: {
                    main: item,
                    ...currentItem,
                },
            });
        }
        Object.assign(state, {
            activeItem: currentItem,
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
