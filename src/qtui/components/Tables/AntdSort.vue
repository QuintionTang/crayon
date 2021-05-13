<template>
    <a-table
        :columns="columns"
        :dataSource="tableData"
        @change="handleChange"
        :pagination="false"
    >
        <template #name="{ text }">
            <a>{{ text }}</a>
        </template>
        <template #customTitle>
            <span> Name </span>
        </template>
        <template #tags="{ text: tags }">
            <span>
                <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="
                        tag === 'loser'
                            ? 'volcano'
                            : tag.length > 5
                            ? 'geekblue'
                            : 'green'
                    "
                >
                    {{ tag.toUpperCase() }}
                </a-tag>
            </span>
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
import { defineComponent, ref } from "vue";
import { dataSource, sortColumns } from "./data";
import { sortBy } from "@/helper/index";
export default defineComponent({
    name: "AntdSortTable",
    setup() {
        const orderValues = {
            ascend: "asc",
            descend: "desc",
        };
        const tableData = ref(dataSource);
        const handleChange = (page, filters, sorter) => {
            const { field, order } = sorter;
            const filtersKeys = Object.keys({ ...filters });
            if (filtersKeys.length > 0) {
                tableData.value = [...dataSource].filter((item) =>
                    filtersKeys.some(
                        (key) =>
                            filters[key].length === 0 ||
                            filters[key].includes(item[key])
                    )
                );
            }
            sortBy(tableData.value, field, orderValues[order]);
        };
        return {
            tableData,
            handleChange,
            columns: sortColumns,
        };
    },
});
</script>
