import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "./global.scss";
import antd from "./antd";
import router from "./router";
import store from "./store";
const app = createApp(App);

app.use(store);
antd(app);

app.config.productionTip = false;
app.use(router);

app.mount("#app");
