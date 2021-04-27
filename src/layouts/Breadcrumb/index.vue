<template>
    <div v-if="breadcrumb">
        <h5 class="font-weight-bold py-3 mb-0">{{ breadcrumb.title }}</h5>
        <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/"><i class="feather icon-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">{{ breadcrumb.main.title }}</a>
                </li>
                <li class="breadcrumb-item active">{{ breadcrumb.title }}</li>
            </ol>
        </div>
    </div>
</template>
<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    name: "Breadcrumb",
    setup() {
        const store = useStore();
        const breadcrumb = computed(() => store.getters["menus/breadcrumb"]);
        return {
            breadcrumb,
        };
    },
});
</script>
