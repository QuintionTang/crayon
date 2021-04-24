<template>
    <li class="sidenav-divider mb-1"></li>
    <li class="sidenav-header small font-weight-semibold">{{ item.title }}</li>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "MenuCategory",
    props: {
        item: Object,
    },
});
</script>
