<template>
    <QtChart type="line" :height="height" :data="lineData" :options="options" />
</template>

<script>
import { defineComponent, computed } from "vue";
import QtChart from "@/qtui/components/Chart.vue";
export default defineComponent({
    name: "ChartSimpleLine",
    components: {
        QtChart,
    },
    props: {
        height: {
            type: Number,
            default: 0,
        },
        color: {
            type: String,
            default: "#716aca",
        },
    },
    setup(props) {
        const lineData = computed(() => {
            return {
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                datasets: [
                    {
                        label: "",
                        data: [30, 5, 26, 10, 22, 30, 5, 26, 10],
                        borderWidth: 2,
                        borderColor: props.color,
                        backgroundColor: "transparent",
                    },
                ],
            };
        });
        const options = computed(() => {
            return {
                legend: {
                    display: false,
                },
                layout: {
                    padding: 0,
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
            };
        });

        return {
            lineData,
            options,
        };
    },
});
</script>
