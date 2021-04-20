<template>
    <a-table
        :dataSource="dataSource"
        rowKey="id"
        :pagination="false"
        :columns="columns"
    >
        <template #number="{ text }">
            <i class="number">{{ text }}</i>
        </template>
    </a-table>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "HotGoods",
    setup() {
        const dataSource = [
            {
                id: 1,
                title: "vue3企业商业之道",
                stock: 32,
                sell: 16,
                orders: 20,
            },
            {
                id: 2,
                title: "vue3企业商业之道",
                stock: 32,
                sell: 16,
                orders: 20,
            },
            {
                id: 3,
                title: "vue3企业商业之道",
                stock: 32,
                sell: 16,
                orders: 20,
            },
            {
                id: 4,
                title: "vue3企业商业之道",
                stock: 32,
                sell: 16,
                orders: 20,
            },
            {
                id: 5,
                title: "vue3企业商业之道",
                stock: 32,
                sell: 16,
                orders: 20,
            },
        ];
        const columns = [
            {
                title: "商品名称",
                dataIndex: "title",
            },
            {
                title: "库存",
                dataIndex: "stock",
                slots: { customRender: "number" },
            },
            {
                title: "销售",
                dataIndex: "sell",
                slots: { customRender: "number" },
            },
            {
                title: "订单数",
                dataIndex: "orders",
                slots: { customRender: "number" },
            },
        ];
        return {
            dataSource,
            columns,
        };
    },
});
</script>
