<template>
    <div class="container-fluid" id="Products">
        <div class="info">
            <h1>Our Products</h1>
            <p>All of our products are made to be customizable to the liking of the user. Lengths of the limbs can be made shorter or longer to accomodate for different points of connection to the user, limbs can also be covered in synthetic skin, if the client so chooses</p>
            <p>Once a Product is ordered, we will contact you (or ask you to visit our lab) to discuss the details of customization for your specific product. once the product is made, the client will need to come in for final fitting to make sure the limb sits comfortably. If you are unable to get to our labs, we will send an engineer to you!</p>
        </div>
        <div v-if="products" class="container" id="products-cnt">
            <card v-for="product in products" :key="product.ProductID">
                <template #prod-image><img :src="product.ProdImg" alt="prod-img" id="product-image"></template>
                <template #Title>{{ product.ProductName }}</template>
                <template #price>R {{ product.Price }}</template>
                <template #btns>
                    <router-link :to="{ name: 'product', params: { id: product.ProductID } }" id="see-more">View More</router-link>
                    <button @click="addtoCart(product.ProductID)" id="cartBtn"><i class="fa-solid fa-cart-plus"></i></button>
                </template>
            </card>
        </div>

        <div v-else class="container loader">
            <spinner/>
        </div>

    </div>
</template>
<script>
import card from '@/components/card.vue';
import {getRole} from '@/service/UserAuthentication.js';
import spinner from '@/components/SpinnerComp.vue';

export default {
    name: "ProductsView",
    components: {
        card,
        spinner
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
            let data = {productID: ID, userID: this.userID }
            this.$store.dispatch('addToCart', data);
        },
    }, 
    computed: {
        products() {
            return this.$store.state.products
        },
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        let user = getRole()
        if(user){
            this.userID = user.userID
        }
    }
}
</script>
<style scoped>
#Products{
    background: black;
    padding: 10px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center
}
#products-cnt{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}
#cartBtn{
    border-radius: 10px;
    background: transparent;
    border: none;
    color: green;
    font-size: 20px;
    transition: text-shadow 0.3s ease, transform 0.3s ease;
}
#cartBtn:hover {
    transform: translateY(-0.1em) translateX(0.1em);
    text-shadow: -6px 4px rgb(6, 59, 6);
}

#cartBtn:active {
  transform: translateY(0em);
}

#product-image{
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
#see-more{
    text-decoration: none;
    color: white;
    transition: box-shadow 0.18s ease, text-shadow 0.18s ease, transform 0.18s ease;
}
#see-more:hover {
    transform: translateY(-0.1em) translateX(0.1em);
}

#see-more:active {
  text-shadow: 0px 0.1em 0.6em #3c4fe0;
  transform: translateY(0em);
}
.loader{
    display: flex;
    justify-content: center;
}
.info{
    width: 50%;
}
h1{
    font-size: 5rem;
    font-family: "Rubik Glitch Pop", system-ui;
    text-decoration: underline red;
}
</style>