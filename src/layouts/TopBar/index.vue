<template>
    <nav
        class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-primary container-p-x"
        id="layout-navbar"
    >
        <a href="/" class="navbar-brand app-brand demo d-lg-none py-0 mr-4">
            <span class="app-brand-logo demo">
                <img
                    src="/assets/images/logo-dark.png"
                    alt="Crayon Logo"
                    class="img-fluid"
                />
            </span>
            <span class="app-brand-text demo font-weight-normal ml-2"
                >Crayon</span
            >
        </a>
        <div
            class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto"
        >
            <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:">
                <i class="ion ion-md-menu text-large align-middle"></i>
            </a>
        </div>

        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#layout-navbar-collapse"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="layout-navbar-collapse">
            <hr class="d-lg-none w-100 my-2" />

            <div class="navbar-nav align-items-lg-center">
                <!-- Search -->
                <label
                    class="nav-item navbar-text navbar-search-box p-0 active"
                >
                    <a-input-search
                        v-model:value="searchKey"
                        placeholder="请输入关键字"
                        @search="onSearch"
                    />
                </label>
            </div>

            <div class="navbar-nav align-items-lg-center ml-auto">
                <a-dropdown
                    v-if="currentAccount"
                    :trigger="['click']"
                    class="navbar-user nav-item dropdown"
                    placement="bottomLeft"
                >
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                    >
                        <span
                            class="d-inline-flex flex-lg-row-reverse align-items-center align-middle"
                        >
                            <img
                                src="/assets/images/avatars/default.jpg"
                                alt=""
                                class="d-block ui-w-30 rounded-circle avatar-border"
                            />
                            <span class="px-1 mr-lg-2 ml-2 ml-lg-0">{{
                                currentAccount.username
                            }}</span>
                        </span>
                    </a>
                    <template #overlay>
                        <a-menu class="dropdown-menu dropdown-menu-right show">
                            <a-menu-item>
                                <a href="javascript:" class="dropdown-item">
                                    <i class="feather icon-user text-muted"></i>
                                    &nbsp; 个人中心</a
                                >
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:" class="dropdown-item">
                                    <i
                                        class="feather icon-settings text-muted"
                                    ></i>
                                    &nbsp; 账号设置</a
                                >
                            </a-menu-item>
                            <a-menu-item>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:" class="dropdown-item">
                                    <i
                                        class="feather icon-power text-danger"
                                    ></i>
                                    &nbsp; 账号注销</a
                                >
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </nav>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    setup() {
        const store = useStore();
        const currentAccount = computed(() => store.state.auth.account);
        const searchKey = ref("");
        const onSearch = () => {
            console.log(searchKey.value);
        };
        return {
            onSearch,
            searchKey,
            currentAccount,
        };
    },
});
</script>
