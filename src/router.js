import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/Auth/index.vue";
import MainLayout from "@/layouts/Main/index.vue";
const routerHistory = createWebHistory();

const routes = [
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
            {
                path: "/tables/antd",
                meta: {
                    title: "Antd表格",
                    authRequired: true,
                },
                component: () => import("./views/tables/antd.vue"),
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 };
    },
});
export default router;
