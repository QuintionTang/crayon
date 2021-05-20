<template>
    <a-table :columns="columns" :dataSource="dataSource" :pagination="false">
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
        <template #expandedRowRender="{ record }">
            <p style="margin: 0">
                My name is {{ record.name }}, I am {{ record.age }} years old.
            </p>
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
import { defineComponent } from "vue";
import { dataSource, baseColumns } from "./data.js";

export default defineComponent({
    name: "AntdRowExpandTable",
    setup() {
        return {
            dataSource,
            columns: baseColumns,
        };
    },
});
</script>
