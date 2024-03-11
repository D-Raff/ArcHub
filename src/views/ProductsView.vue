<template>
    <div class="Products">
        
    </div>
</template>
<script>
export default {
    name: "ProductsView",
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
        },
    },
}
</script>
<style>
    
</style>