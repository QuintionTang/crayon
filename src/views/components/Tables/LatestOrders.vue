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
    name: "LatestOrders",
    setup() {
        const dataSource = [
            {
                id: 1,
                customer: "DevPoint",
                order_id: 20002255,
                title: "vue3企业商业之道",
                quantity: 32,
                order_time: 16,
                status: 1,
            },
            {
                id: 2,
                customer: "DevPoint",
                order_id: 20002255,
                title: "vue3企业商业之道",
                quantity: 32,
                order_time: 16,
                status: 1,
            },
            {
                id: 3,
                customer: "DevPoint",
                order_id: 20002255,
                title: "vue3企业商业之道",
                quantity: 32,
                order_time: 16,
                status: 1,
            },
            {
                id: 4,
                customer: "DevPoint",
                order_id: 20002255,
                title: "vue3企业商业之道",
                quantity: 32,
                order_time: 16,
                status: 1,
            },
            {
                id: 5,
                customer: "DevPoint",
                order_id: 20002255,
                title: "vue3企业商业之道",
                quantity: 32,
                order_time: 16,
                status: 1,
            },
        ];
        const columns = [
            {
                title: "用户名称",
                dataIndex: "customer",
            },
            {
                title: "订单号",
                dataIndex: "order_id",
            },
            {
                title: "商品名称",
                dataIndex: "title",
            },
            {
                title: "商品名称",
                dataIndex: "title",
            },
            {
                title: "数量",
                dataIndex: "quantity",
                slots: { customRender: "number" },
            },
            {
                title: "下单时间",
                dataIndex: "order_time",
                slots: { customRender: "datetime" },
            },
            {
                title: "状态",
                dataIndex: "status",
                slots: { customRender: "orderStatus" },
            },
        ];
        return {
            dataSource,
            columns,
        };
    },
});
</script>
