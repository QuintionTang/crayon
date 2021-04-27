<template>
    <li
        class="sidenav-item"
        :class="{
            open: item.key === activeSubmenuKey,
        }"
    >
        <router-link
            v-if="item.url"
            :to="item.url"
            class="sidenav-link sidenav-toggle"
        >
            <i
                class="sidenav-icon"
                :class="{
                    [item.icon]: true,
                }"
            ></i>
            <div>{{ item.title }}</div>
        </router-link>
        <a
            href="javascript:;"
            v-if="!item.url"
            @click="() => handleSubmenuClick(item.key)"
            class="sidenav-link sidenav-toggle"
        >
            <i
                class="sidenav-icon"
                :class="{
                    [item.icon]: true,
                }"
            ></i>
            <div>{{ item.title }}</div>
        </a>
        <ul v-if="item.children" class="sidenav-menu">
            <li
                class="sidenav-item"
                v-for="subitem in item.children"
                :class="{
                    active: activeItem && subitem.key === activeItem.key,
                }"
                :key="subitem.key"
            >
                <router-link
                    v-if="subitem.url"
                    :to="subitem.url"
                    class="sidenav-link"
                >
                    <div>{{ subitem.title }}</div>
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "MenuItem",
    props: {
        item: {
            type: Object,
        },
        activeSubmenuKey: { type: String },
        activeItem: { type: Object },
        handleSubmenuClick: Function,
    },
});
</script>
