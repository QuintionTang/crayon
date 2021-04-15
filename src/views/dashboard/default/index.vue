<template>
    <div class="rwc-layout-content">
        <div class="container-fluid flex-grow-1 container-p-y">
            <Breadcrumb />
            <div class="row">
                <div class="col-lg-7">
                    <div class="card mb-4">
                        <div class="card-header with-elements">
                            <h6 class="card-header-title mb-0">统计</h6>
                            <div class="card-header-elements ml-auto"></div>
                        </div>
                        <div class="card-body">
                            <!--统计内容开始-->
                            <div class="dashboard-chart-box">
                                <ChartLine :height="220" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4 bg-pattern-2-dark">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div
                                            class="lnr lnr-gift display-4 text-primary"
                                        ></div>
                                        <div class="ml-3">
                                            <div class="text-muted small">
                                                商品
                                            </div>
                                            <div class="text-large">
                                                <i class="number">1000</i>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-3 chart-shadow-primary chart-box-h40"
                                    >
                                        <ChartSimpleLine :height="40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div
                                class="card mb-4 bg-pattern-2 bg-primary text-white"
                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div
                                            class="lnr lnr-cart display-4"
                                        ></div>
                                        <div class="ml-3">
                                            <div class="small">销售</div>
                                            <div class="text-large">
                                                <i class="number">1000</i>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-3 chart-shadow chart-box-h40"
                                    >
                                        <ChartSimpleLine
                                            color="#ffffff"
                                            :height="40"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="card d-flex w-100 mb-4">
                                <div
                                    class="row no-gutters row-bordered row-border-light h-100"
                                >
                                    <div
                                        class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                                    >
                                        <div
                                            class="card-body media align-items-center text-dark"
                                        >
                                            <i
                                                class="lnr lnr-diamond display-4 d-block text-primary"
                                            ></i>
                                            <span
                                                class="media-body d-block ml-3"
                                                ><span
                                                    class="text-big mr-1 text-primary"
                                                    >￥<i class="number"
                                                        >1584.78</i
                                                    ></span
                                                >
                                                <br />
                                                <small class="text-muted"
                                                    >本月盈亏</small
                                                >
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                                    >
                                        <div
                                            class="card-body media align-items-center text-dark"
                                        >
                                            <i
                                                class="feather icon-clock display-4 d-block text-primary"
                                            ></i>
                                            <span
                                                class="media-body d-block ml-3"
                                                ><span class="text-big"
                                                    ><span
                                                        class="mr-1 text-primary"
                                                        ><i class="number"
                                                            >160</i
                                                        ></span
                                                    >小时</span
                                                >
                                                <br />
                                                <small class="text-muted"
                                                    >在线时长</small
                                                >
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                                    >
                                        <div
                                            class="card-body media align-items-center text-dark"
                                        >
                                            <i
                                                class="lnr lnr-hourglass display-4 d-block text-primary"
                                            ></i>
                                            <span
                                                class="media-body d-block ml-3"
                                                ><span class="text-big"
                                                    ><span
                                                        class="mr-1 text-primary"
                                                        ><i class="number"
                                                            >60</i
                                                        ></span
                                                    >
                                                    个</span
                                                >
                                                <br />
                                                <small class="text-muted"
                                                    >任务数量</small
                                                >
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"
                                    >
                                        <div
                                            class="card-body media align-items-center text-dark"
                                        >
                                            <i
                                                class="lnr lnr-license display-4 d-block text-primary"
                                            ></i>
                                            <span
                                                class="media-body d-block ml-3"
                                                ><span class="text-big"
                                                    ><span
                                                        class="mr-1 text-primary"
                                                        ><i class="number"
                                                            >10</i
                                                        ></span
                                                    >
                                                    个</span
                                                >
                                                <br />
                                                <small class="text-muted"
                                                    >项目数量</small
                                                >
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- 2nd row Start -->
                <div class="col-md-12">
                    <div class="card d-flex w-100 mb-4">
                        <div
                            class="row no-gutters row-bordered row-border-light h-100"
                        >
                            <div
                                class="d-flex col-md-6 col-lg-3 align-items-center"
                            >
                                <div class="card-body">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-auto">
                                            <i
                                                class="lnr lnr-earth text-primary display-4"
                                            ></i>
                                        </div>
                                        <div class="col">
                                            <h6 class="mb-0 text-muted">
                                                订阅数量
                                            </h6>
                                            <h4 class="mt-3 mb-0">
                                                <i class="number">8599</i
                                                ><i
                                                    class="ion ion-md-arrow-round-down ml-3 text-danger"
                                                ></i>
                                            </h4>
                                        </div>
                                    </div>
                                    <p class="mb-0 text-muted">
                                        <i class="number">48</i>% 过去24小时
                                    </p>
                                </div>
                            </div>
                            <div
                                class="d-flex col-md-6 col-lg-3 align-items-center"
                            >
                                <div class="card-body">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-auto">
                                            <i
                                                class="lnr lnr-cart text-primary display-4"
                                            ></i>
                                        </div>
                                        <div class="col">
                                            <h6 class="mb-0 text-muted">
                                                订单数量
                                            </h6>
                                            <h4 class="mt-3 mb-0">
                                                <i class="number">6898</i
                                                ><i
                                                    class="ion ion-md-arrow-round-up ml-3 text-success"
                                                ></i>
                                            </h4>
                                        </div>
                                    </div>
                                    <p class="mb-0 text-muted">
                                        <i class="number">36</i>% 过去6个月
                                    </p>
                                </div>
                            </div>
                            <div
                                class="d-flex col-md-6 col-lg-3 align-items-center"
                            >
                                <div class="card-body">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-auto">
                                            <i
                                                class="lnr lnr-users text-primary display-4"
                                            ></i>
                                        </div>
                                        <div class="col">
                                            <h6 class="mb-0 text-muted">
                                                访问数量
                                            </h6>
                                            <h4 class="mt-3 mb-0">
                                                <i class="number">652</i
                                                ><i
                                                    class="ion ion-md-arrow-round-down ml-3 text-danger"
                                                ></i>
                                            </h4>
                                        </div>
                                    </div>
                                    <p class="mb-0 text-muted">
                                        <i class="number">36</i>% 过去6个月
                                    </p>
                                </div>
                            </div>
                            <div
                                class="d-flex col-md-6 col-lg-3 align-items-center"
                            >
                                <div class="card-body">
                                    <div class="row align-items-center mb-3">
                                        <div class="col-auto">
                                            <i
                                                class="lnr lnr-magic-wand text-primary display-4"
                                            ></i>
                                        </div>
                                        <div class="col">
                                            <h6 class="mb-0 text-muted">
                                                当月收入
                                            </h6>
                                            <h4 class="mt-3 mb-0">
                                                ￥<i class="number">6988</i
                                                ><i
                                                    class="ion ion-md-arrow-round-up ml-3 text-success"
                                                ></i>
                                            </h4>
                                        </div>
                                    </div>
                                    <p class="mb-0 text-muted">
                                        <i class="number">50</i>% 过去6个月
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Staustic card 3 Start -->
                </div>
                <!-- 2nd row Start -->
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import ChartLine from "../../components/ChartLine/Line.vue";
import ChartSimpleLine from "../../components/ChartLine/SimpleLine.vue";
import Breadcrumb from "@/qtui/components/Breadcrumb.vue";
export default defineComponent({
    name: "DefaultDashboard",
    components: {
        Breadcrumb,
        ChartLine,
        ChartSimpleLine,
    },
    setup() {
        const chartdiv = ref(null);
        onMounted(() => {});
        return { chartdiv };
    },
});
</script>
