import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "@/layouts/Auth/index.vue";
import MainLayout from "@/layouts/Main/index.vue";
import { useStore } from "@/store";
const routerHistory = createWebHistory();

const routes = [
    {
        path: "/",
        redirect: "/dashboard/default",
        component: MainLayout,
        meta: {
            requiresAuth: true,
            hidden: true,
        },
        children: [
            {
                path: "/dashboard/default",
                meta: {
                    title: "默认",
                    requiresAuth: true,
                },
                component: () => import("./views/dashboard/default/index.vue"),
            },
            {
                path: "/tables/antd",
                meta: {
                    title: "Antd表格",
                    requiresAuth: true,
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
                name: "login",
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
/**
 * 功能路由限制，是否需要登录才能进入在此处进行判断
 */
router.beforeEach((to, from, next) => {
    const { matched } = to;
    const authPage = "login";
    const store = useStore();
    store.dispatch("auth/loadAccount");
    if (
        to.name !== authPage &&
        matched.some((record) => record.meta.requiresAuth)
    ) {
        store.state.auth.authorized ? next() : next({ name: authPage });
    } else {
        next();
    }
});
export default router;
