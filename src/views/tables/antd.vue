<template>
    <div>
        <div class="row">
            <div class="col-xl-6 col-md-12">
                <div class="card mb-4">
                    <div class="card-header with-elements">
                        <h6 class="card-header-title mb-0">基础用法</h6>
                        <div class="card-header-elements ml-auto"></div>
                    </div>
                    <div class="card-body p-0"><AntdTable /></div>
                </div>
            </div>
            <div class="col-xl-6 col-md-12">
                <div class="card mb-4">
                    <div class="card-header with-elements">
                        <h6 class="card-header-title mb-0">数据选择</h6>
                        <div class="card-header-elements ml-auto"></div>
                    </div>
                    <div class="card-body p-0">
                        <AntdRowSelection />
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-md-12">
                <div class="card mb-4">
                    <div class="card-header with-elements">
                        <h6 class="card-header-title mb-0">过滤排序</h6>
                        <div class="card-header-elements ml-auto"></div>
                    </div>
                    <div class="card-body p-0"><AntdTable /></div>
                </div>
            </div>
            <div class="col-xl-6 col-md-12">
                <div class="card mb-4">
                    <div class="card-header with-elements">
                        <h6 class="card-header-title mb-0">展开行表</h6>
                        <div class="card-header-elements ml-auto"></div>
                    </div>
                    <div class="card-body p-0">
                        <AntdRowSelection />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

import AntdTable from "@/qtui/components/Tables/AntdBasic.vue";
import AntdRowSelection from "@/qtui/components/Tables/AntdRowSelection.vue";

export default defineComponent({
    name: "DefaultDashboard",
    components: {
        AntdTable,
        AntdRowSelection,
    },
    setup() {
        onMounted(() => {});
        return {};
    },
});
</script>
