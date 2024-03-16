<template>
    <div class="container-fluid" id="Single-View">
        <div id="product">
            <div id="images">
                <img :src="product.ProdImg" alt="Product Image">
            </div>
            <div class="information">
                <h1>{{ product.ProductName }}</h1>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductView",
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
}
</script>
<style scoped>
*,
*::before,
*::after{
    box-sizing: border-box;
}
#Single-View {
    min-height: 80vh;
    background: black;
}
#product{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-inline: 0;
    width: 100%;
    padding: 10px;
}
#images{
    margin: 0;
}
</style>