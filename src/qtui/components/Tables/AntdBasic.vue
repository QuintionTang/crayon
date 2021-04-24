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
        <template #action="{ record }">
            <span>
                <a>Invite 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
            </span>
        </template>
    </a-table>
</template>
<script>
import { defineComponent } from "vue";
import { dataSource, baseColumns } from "./data";

export default defineComponent({
    name: "AntdBasic",
    setup() {
        return {
            dataSource,
            columns: baseColumns,
        };
    },
});
</script>
