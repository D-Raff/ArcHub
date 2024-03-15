<template>
    <div class="container-fluid" id="Products">
        <div v-if="products" class="container" id="products-cnt">
            <card v-for="product in products" :key="product.ProductID">
                <template #prod-image><img :src="product.ProdImg" alt="prod-img" id="product-image"></template>
                <template #Title>{{ product.ProductName }}</template>
                <template #desc>{{ product.ProdDesc }}</template>
                <template #btns>
                    <router-link :to="{ name: 'product', params: { id: product.ProductID } }" id="see-more">View More</router-link>
                    <button @click="addtoCart(product.ProductID)" id="cartBtn">add to cart</button>
                </template>
            </card>
        </div>

    </div>
</template>
<script>
import card from '@/components/card.vue';

export default {
    name: "ProductsView",
    components: {
        card
    },
    data() {
        return {
            cartPayload: {
                OrderID: null,
                productID: "",
                userID: ""
            }
        }
    },
    methods: {
        addtoCart(ID) {
            let data = { productID: ID, userID: this.userID }
            this.$store.dispatch('addToCart', data);
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
#Products{
    background: black;
    padding: 10px;
}
#products-cnt{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}
#cartBtn{
    border-radius: 10px;
    background: transparent;
    border: none;
    border-right: 2px solid red;
    border-left: 2px solid red;
}
#cartBtn:hover{
    animation: pulse 2s infinite;
}
@keyframes pulse {
    50%{
        box-shadow: inset 0px 0px 13px 2px red;
    }
    
}
#product-image{
    height: 250px;
    border-top-left-radius: 10px;
     border-top-right-radius: 10px;
}
#see-more{
    text-decoration: none;
    color: white;
}
</style>