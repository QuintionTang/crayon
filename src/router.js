import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/Auth/index.vue";
import MainLayout from "@/layouts/Main/index.vue";
const routerHistory = createWebHistory();

const routers = [
    {
        path: "/",
        redirect: "/dashboard/default",
        component: MainLayout,
        meta: {
            authRequired: true,
            hidden: true,
        },
        children: [
            {
                path: "/dashboard/default",
                meta: {
                    title: "默认",
                    authRequired: true,
                },
                component: () => import("./views/dashboard/default/index.vue"),
            },
        ],
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
