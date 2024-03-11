<template>
    <div class="Products container-fluid">
        <div v-if="products" class="container">
            <card v-for="product in products" :key="product.productID">
                <template #Title>{{ product.ProductName }}</template>
                <template #desc>{{ product.ProdDesc }}</template>
            </card>
        </div>

    </div>
</template>
<script>
import card from '@/components/card.vue';

export default {
    name: "ProductsView",
    components:{
        card
    },
    data() {
        return {
            cartPayload:{
                OrderID: null,
                productID: "",
                userID: ""
            }
        }
    },
    methods:{
        addtoCart() {
            this.data = { productID: this.productID, userID: this.userID }
            this.$store.dispatch('addToCart', this.data);
        }
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>
<style>
    
</style>