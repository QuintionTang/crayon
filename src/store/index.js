import { createStore } from "vuex";
import auth from "./auth";
import settings from "./settings";
export default createStore({
    modules: {
        auth,
        settings,
    },
});
