<template>
    <!-- [ Layout wrapper ] Start -->
    <div class="rwc-layout-wrapper">
        <div class="rwc-layout-inner">
            <div
                id="layout-sidenav"
                class="rwc-layout-sidenav sidenav sidenav-vertical bg-white"
            >
                <div class="app-brand demo">
                    <span class="app-brand-logo rwc-brand">
                        <img
                            src="/assets/images/logo-dark.png"
                            alt="Crayon Logo"
                            class="img-fluid"
                        />
                    </span>

                    <a
                        href="javascript:"
                        class="layout-sidenav-toggle sidenav-link text-large ml-auto"
                    >
                        <i class="ion ion-md-menu align-middle"></i>
                    </a>
                </div>
                <div class="sidenav-divider mt-0"></div>

                <!-- Links -->
                <ul class="sidenav-inner">
                    <!-- Dashboards -->
                    <li class="sidenav-item open active">
                        <a
                            href="javascript:"
                            class="sidenav-link sidenav-toggle"
                        >
                            <i class="sidenav-icon feather icon-home"></i>
                            <div>仪表盘</div>
                            <div class="pl-1 ml-auto">
                                <div class="badge badge-danger">Hot</div>
                            </div>
                        </a>
                        <ul class="sidenav-menu">
                            <li class="sidenav-item active">
                                <a
                                    href="/dashboard/default"
                                    class="sidenav-link"
                                >
                                    <div>默认</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="rwc-layout-container">
                <top-bar></top-bar>
                <router-view v-slot="{ Component }">
                    <transition @enter="enter" @leave="leave">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, onMounted } from "vue";
import TopBar from "../TopBar/index.vue";
import { enter, leave } from "./index";
export default defineComponent({
    name: "MainLayout",
    components: {
        TopBar,
    },
    setup() {
        const store = useStore();
        const settings = store.state.settings;
        const setViewPort = (isMobileView = false, isTabletView = false) => {
            store.commit("CHANGE_SETTING", {
                setting: "isMobileView",
                value: isMobileView,
            });
            store.commit("CHANGE_SETTING", {
                setting: "isTabletView",
                value: isTabletView,
            });
        };
        const detectViewPort = (firstLoad) => {
            const isMobile = settings.isMobileView;
            const isTablet = settings.isTabletView;
            const width = window.innerWidth;
            const state = {
                next: {
                    mobile: width < 768,
                    tablet: width < 992,
                    desktop: !(width < 768) && !(width < 992),
                },
                prev: {
                    mobile: isMobile,
                    tablet: isTablet,
                    desktop: !isMobile && !isTablet,
                },
            };
            // desktop
            if (
                state.next.desktop &&
                (state.next.desktop !== state.prev.desktop || firstLoad)
            ) {
                setViewPort(false, false);
            }
            // tablet & collapse menu
            if (
                state.next.tablet &&
                !state.next.mobile &&
                (state.next.tablet !== state.prev.tablet || firstLoad)
            ) {
                setViewPort(false, true);
                store.commit("CHANGE_SETTING", {
                    setting: "isMenuCollapsed",
                    value: true,
                });
            }
            // mobile
            if (
                state.next.mobile &&
                (state.next.mobile !== state.prev.mobile || firstLoad)
            ) {
                setViewPort(true, false);
            }
        };
        const detectViewPortListener = () => {
            detectViewPort(false);
        };
        onMounted(() => {
            detectViewPort(true);
            window.addEventListener("resize", detectViewPortListener);
        });

        return {
            enter,
            leave,
        };
    },
});
</script>
