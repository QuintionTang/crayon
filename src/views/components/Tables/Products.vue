<template>
    <a-table
        :columns="columns"
        :loading="loading"
        :dataSource="dataSource"
        :pagination="false"
        rowKey="id"
    >
        <template #name="{ text }">
            <a>{{ text }}</a>
        </template>
        <template #price="{ text }">
            ￥
            <i class="number">{{ text }}</i>
        </template>
        <template #number="{ text }">
            <i class="number">{{ text }}</i>
        </template>
        <template #action="{ record }">
            <a class="btn btn-sm btn-warning mr-2" href="javascript: void(0);">
                <span class="btn-addon">
                    <i class="feather icon-trash mr-1"></i>
                </span>
                Delete
            </a>
            <a class="btn btn-sm btn-success" href="javascript: void(0);">
                <span class="btn-addon">
                    <i class="feather icon-edit mr-1"></i>
                </span>
                Edit
            </a>
        </template>
    </a-table>
</template>
<script>
import { computed, defineComponent } from "vue";
import { productsColumns } from "./columnsData";
import { useStore } from "@/store";

export default defineComponent({
    name: "QtProducts",
    setup() {
        const store = useStore();
        const dataSource = computed(() => {
            return store.state.ecommerce.list;
        });
        const loading = computed(() => {
            return store.state.ecommerce.loading;
        });
        return {
            loading,
            dataSource,
            columns: productsColumns,
        };
    },
});
</script>
