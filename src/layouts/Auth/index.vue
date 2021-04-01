<template>
    <div class="auth-wrapper">
        <div class="auth-wrapper-inner">
            <div
                class="d-lg-flex col-lg-8 align-items-center bg-cover bg-overlay-container p-5"
            >
                <div class="bg-overlay bg-dark opacity-50"></div>
                <!-- [ Text ] Start -->
                <div class="w-100 text-white px-5">
                    <h1 class="display-2 text-white font-weight-bolder mb-4">
                        Crayon Admin UI
                    </h1>
                    <div class="text-large font-weight-light">
                        蜡笔（Crayon）Admin Ui 一个基于Vue3+、Vuex4+、Ant
                        Design2，并准备好使用REST
                        API作为数据通讯标准，以Vite作为构建工具的管理模板。
                    </div>
                </div>
                <!-- [ Text ] End -->
            </div>
            <div class="d-flex col-lg-4 align-items-center bg-white p-5">
                <!-- Inner container -->
                <div
                    class="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto"
                >
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout",
};
</script>
