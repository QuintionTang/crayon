import { createStore } from "vuex";
import auth from "./auth";
import menus from "./menus";
import settings from "./settings";
import ecommerce from "./ecommerce";

const store = createStore({
    modules: {
        auth,
        settings,
        menus,
        ecommerce,
    },
});

export function useStore() {
    return store;
}

export default store;
