<template>
    <canvas ref="refChart" :height="setHeight"></canvas>
</template>
<script>
import { defineComponent, onMounted, ref, inject, watch } from "vue";
import Chart from "chart.js";
import { deepCopy } from "@/helper/index";
export default defineComponent({
    name: "QtChart",
    props: {
        type: {
            type: String,
            required: true,
            default: "line",
        },
        data: {
            type: Object,
            required: true,
            default: () => ({}),
        },
        options: {
            type: Object,
            default: () => ({}),
        },
        height: {
            type: Number,
            default: 0,
        },
        refKey: {
            type: String,
            default: null,
        },
    },
    setup(props) {
        const refChart = ref();
        // 初始化方法
        const init = () => {
            const canvasChart = refChart.value?.getContext("2d");
            const chartHelper = new Chart(canvasChart, {
                type: props.type,
                data: deepCopy(props.data),
                options: props.options,
            });

            watch(props, () => {
                chartHelper.data = deepCopy(props.data);
                chartHelper.options = props.options;
                chartHelper.update();
            });
            // 附加一个实例给refChart
            refChart.value.instance = chartHelper;
        };
        // 设置高度
        const setHeight = () => {
            return {
                height: props.height,
            };
        };
        // 绑定一个实例，使用inject注入
        const bindInstance = () => {
            if (props.refKey) {
                const bind = inject(`bind[${props.refKey}]`);
                if (bind) {
                    bind(refChart.value);
                }
            }
        };
        onMounted(() => {
            bindInstance();
            init();
        });
        return {
            refChart,
            setHeight,
        };
    },
});
</script>
