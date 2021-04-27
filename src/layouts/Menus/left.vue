<template>
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
    <ul class="sidenav-inner">
        <template :key="index" v-for="(item, index) in menusData">
            <MenuItem
                v-if="!item.category"
                :item="item"
                :activeSubmenuKey="activeSubmenuKey"
                :handleSubmenuClick="handleSubmenuClick"
                :activeItem="activeItem"
            />
            <MenuCategory v-if="item.category" :item="item" />
        </template>
    </ul>
</template>

<script>
import { useStore } from "@/store";
import { useRoute } from "vue-router";

import MenuCategory from "./partials/category.vue";
import MenuItem from "./partials/menu.vue";
import {
    defineComponent,
    computed,
    ref,
    watch,
    onMounted,
} from "@vue/runtime-core";
export default defineComponent({
    components: {
        MenuCategory,
        MenuItem,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const setCurrentAction = (r) => {
            store.dispatch("menus/currentRoute", r);
        };
        const sideMenu = computed(() => store.state.menus.menus);
        const activeSubmenuKey = computed(
            () => store.state.menus.activeSubmenuKey
        );
        const activeItem = computed(() => store.state.menus.activeItem);
        const menusData = ref(sideMenu.value);
        const handleSubmenuClick = (key) => {
            store.dispatch("menus/setActiveSubmenuKey", {
                key,
            });
        };

        watch(
            computed(() => route.path),
            () => {
                setCurrentAction(route);
            }
        );
        onMounted(() => {
            setCurrentAction(route);
        });
        return {
            menusData,
            activeSubmenuKey,
            activeItem,
            handleSubmenuClick,
        };
    },
});
</script>

<style></style>
