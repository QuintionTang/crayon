<template>
    <div>
        <h5 class="font-weight-bold py-3 mb-0">默认</h5>
        <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/"><i class="feather icon-home"></i></a>
                </li>
                <li class="breadcrumb-item"><a href="#">仪表盘</a></li>
                <li class="breadcrumb-item active">默认</li>
            </ol>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "Breadcrumb",
});
</script>
