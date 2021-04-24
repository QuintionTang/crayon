<template>
    <!-- [ Layout wrapper ] Start -->
    <div class="rwc-layout-wrapper">
        <div class="rwc-layout-inner">
            <div
                id="layout-sidenav"
                class="rwc-layout-sidenav sidenav sidenav-vertical bg-white"
            >
                <MenuLeft />
            </div>
            <div class="rwc-layout-container">
                <top-bar></top-bar>
                <div class="rwc-layout-content">
                    <div class="container-fluid flex-grow-1 container-p-y">
                        <Breadcrumb />
                        <router-view v-slot="{ Component }">
                            <transition @enter="enter" @leave="leave">
                                <component :is="Component" />
                            </transition>
                        </router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, onMounted } from "vue";
import TopBar from "../TopBar/index.vue";
import MenuLeft from "../Menus/left.vue";
import Breadcrumb from "@/qtui/components/Breadcrumb.vue";
import { enter, leave } from "./index";
export default defineComponent({
    name: "MainLayout",
    components: {
        TopBar,
        MenuLeft,
        Breadcrumb,
    },
    setup() {
        const store = useStore();
        const settings = store.state.settings;
        const setViewPort = (isMobileView = false, isTabletView = false) => {
            store.dispatch("settings/update", {
                setting: "isMobileView",
                value: isMobileView,
            });
            store.dispatch("settings/update", {
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
                store.dispatch("settings/update", {
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
