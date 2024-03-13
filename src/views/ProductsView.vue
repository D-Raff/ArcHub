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
}
#products-cnt{
    display: flex;
    flex-wrap: wrap;
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
    animation: pulse 3s infinite;
}
@keyframes pulse {
    50%{
        box-shadow: inset 0px 0px 13px 2px red;
    }
    100%{
        box-shadow: non;
    }
    
}
.card:hover{
    #product-image{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
}
#product-image{
    height: 250px;
}
#see-more{
    text-decoration: none;
}
</style>