import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/Auth/index.vue";
import HelloWorld from "./components/HelloWorld.vue";
const routerHistory = createWebHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

const routers = [
    {
        path: "/",
        component: HelloWorld,
        meta: {
            authRequired: true,
            hidden: true,
        },
    },
    {
        path: "/auth",
        component: AuthLayout,
        redirect: "auth/login",
        children: [
            {
                path: "/auth/login",
                meta: {
                    title: "用户登录",
                },
                component: () => import("./views/auth/login/index.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: routerHistory,
    routes: routers,
});
export default router;
