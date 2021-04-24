import { createStore } from "vuex";
import auth from "./auth";
import menus from "./menus";
import settings from "./settings";

const store = createStore({
    modules: {
        auth,
        settings,
        menus,
    },
});

export function useStore() {
    return store;
}

export default store;
