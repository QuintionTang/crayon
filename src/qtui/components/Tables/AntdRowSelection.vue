<template>
    <a-table
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="rowSelection"
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
import { dataSource, baseColumns } from "./data.js";

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};
export default defineComponent({
    name: "AntdRowSelection",
    setup() {
        return {
            rowSelection,
            dataSource,
            columns: baseColumns,
        };
    },
});
</script>
