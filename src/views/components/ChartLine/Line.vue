<template>
    <QtChart type="line" :height="height" :data="lineData" :options="options" />
</template>

<script>
import { defineComponent, computed } from "vue";
import QtChart from "@/qtui/components/Chart.vue";
export default defineComponent({
    name: "ChartLine",
    components: {
        QtChart,
    },
    props: {
        height: {
            type: Number,
            default: 0,
        },
    },
    setup() {
        const lineData = computed(() => {
            return {
                labels: [
                    "一月",
                    "二月",
                    "三月",
                    "四月",
                    "五月",
                    "六月",
                    "七月",
                    "八月",
                    "九月",
                    "十月",
                    "十一月",
                    "十二月",
                ],
                datasets: [
                    {
                        label: "前端课程",
                        data: [
                            0,
                            200,
                            250,
                            200,
                            500,
                            450,
                            850,
                            1050,
                            950,
                            1100,
                            900,
                            1200,
                        ],
                        borderWidth: 2,
                        borderColor: "#716aca",
                        backgroundColor: "transparent",
                    },
                    {
                        label: "设计模式",
                        data: [
                            0,
                            300,
                            400,
                            560,
                            320,
                            600,
                            720,
                            850,
                            690,
                            805,
                            1200,
                            1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: "#a0afbf",
                        backgroundColor: "transparent",
                    },
                ],
            };
        });
        const options = computed(() => {
            return {
                legend: {
                    display: true,
                    position: "top",
                    labels: {
                        fontSize: 12,
                        usePointStyle: true,
                    },
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return " ￥" + tooltipItem.yLabel + "";
                        },
                    },
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: "#777777",
                                callback: function (value) {
                                    return "￥" + value;
                                },
                            },
                            gridLines: {
                                color: "#D8D8D8",
                                zeroLineColor: "#D8D8D8",
                                borderDash: [2, 1],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
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
