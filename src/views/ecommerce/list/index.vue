<template>
    <div>
        <div class="row">
            <div class="col-xl-12 col-md-12">
                <div class="card mb-4">
                    <div class="card-header with-elements">
                        <h6 class="card-header-title mb-0">Products</h6>
                        <div class="card-header-elements ml-auto"></div>
                    </div>
                    <div class="card-body p-0"><QtProducts /></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

import { useStore } from "@/store";

import QtProducts from "@/views/components/Tables/Products.vue";

export default defineComponent({
    name: "EcommerceProducts",
    components: {
        QtProducts,
    },
    setup() {
        const store = useStore();
        onMounted(() => {
            store.dispatch("ecommerce/getProducts", {
                orderby: "id",
                sort: "desc",
                limit: 10,
                offset: 0,
            });
        });
        return {};
    },
});
</script>
