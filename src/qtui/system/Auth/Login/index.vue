<template>
    <div class="w-100">
        <!-- [ Logo ] Start -->
        <div class="d-flex justify-content-center align-items-center">
            <div class="ui-w-60">
                <div class="w-100 position-relative">
                    <img
                        src="/assets/images/logo-dark.png"
                        alt="Brand Logo"
                        class="img-fluid"
                    />
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!-- [ Logo ] End -->

        <h5 class="text-center text-lighter font-weight-normal mt-5 mb-0">
            用户登录
        </h5>
        <a-form
            class="my-5"
            ref="loginRef"
            :model="loginState"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-alert
                v-if="errors && !disLoading"
                :message="errors.message"
                type="error"
                class="alert-dark-warning mb-4"
            />
            <a-form-item ref="username" name="username" label="用户名称">
                <a-input
                    placeholder="用户名称"
                    v-model:value="loginState.username"
                />
            </a-form-item>
            <a-form-item label="登录密码" name="password">
                <a-input
                    placeholder="登录密码"
                    type="password"
                    v-model:value="loginState.password"
                />
            </a-form-item>
            <div class="d-flex justify-content-between align-items-center m-0">
                <label class="custom-control custom-checkbox m-0">
                    &nbsp;
                </label>
                <a-button type="primary" :loading="loading" @click="onSubmit"
                    >立即登录</a-button
                >
            </div>
        </a-form>
        <div class="text-center text-muted">
            没有账号？
            <a href="#">注册账号</a>
        </div>
    </div>
</template>
<script>
import { useStore } from "@/store";
import { defineComponent, computed, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
    setup() {
        const loading = ref(false);
        const loginRef = ref();
        const loginState = reactive({
            username: "administrator",
            password: "devpoint",
        });
        const store = useStore();
        const router = useRouter();
        const onSubmit = () => {
            loading.value = true;
            loginRef.value.validate().then(() => {
                store.dispatch("auth/login", loginState);
            });
        };
        watch(
            computed(() => store.state.auth.authorized),
            () => {
                store.state.auth.authorized && router.push({ path: "/" });
            }
        );
        const rules = {
            username: [
                {
                    required: true,
                    message: "请输入用户名称",
                    trigger: "blur",
                },
                {
                    min: 3,
                    max: 20,
                    message: "用户名称长度为：3-20个字符",
                    trigger: "blur",
                },
            ],
            password: [
                {
                    required: true,
                    message: "请输入登录密码",
                    trigger: "blur",
                },
            ],
        };
        return {
            loginRef,
            loading,
            labelCol: {
                span: 6,
            },
            rules,
            wrapperCol: {
                span: 18,
            },
            loginState,
            onSubmit,
            errors: computed(() => store.state.auth.errors),
            disLoading: computed(() => {
                const isLoading = store.state.auth.loading;
                loading.value = isLoading;
            }),
        };
    },
});
</script>
