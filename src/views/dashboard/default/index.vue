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
                        <div class="card-body">统计曲线</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumb from "../../../components/Breadcrumb.vue";
export default defineComponent({
    name: "DefaultDashboard",
    components: {
        Breadcrumb,
    },
});
</script>
