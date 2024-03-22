<template>
    <div class="container-fluid" id="Single-View">
        <div id="product">
            <div id="images">
                <img :src="product.ProdImg" alt="Product-Image" id="p-img">
            </div>
            <div class="information">
                <h1>{{ product.ProductName }}</h1>
                <p>
                    {{ product.ProdDesc }}
                </p>
                <p> category: {{ product.Category }}</p>
                <p v-if="product.Stock > 0">
                        In Stock
                    </p>
                    <p v-else>
                        This product is out of stock. Please Enquire with us to discuss the making, design and shipping
                        of this product, specifically for you
                    </p>

                <div class="button-price">
                    <p>R {{ product.Price }}</p>
                    <button class="btn cart-btn" @click="addtoCart(product.ProductID)"> add to cart <i
                            class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductView",
     data() {
        return {
            cartPayload: {
                OrderID: null,
                productID: "",
                userID: ""
            }
        }
    },
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    },
    methods: {
        addtoCart(ID) {
            let data = { productID: ID, userID: this.userID }
            this.$store.dispatch('addToCart', data);
        }
    },
}
</script>
<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

#Single-View {
    min-height: 80vh;
    background: black;
}

#product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-inline: 0;
    width: 100%;
    padding: 10px;
}

#images {
    margin: 0;
}

#p-img {
    height: 700px;
    aspect-ratio: 1/1;
}

.information {
    width: 50%;
    position: relative;
    text-align: left;
    background-color: black;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 20px;
}

.button-price {
    width: 200px;
    min-height: 200px;
    box-shadow: 0px 1px 5px 3px #2D619E;
    font-size: 30px;
    background: black;
    font-weight: bold;
    text-align: center;
    animation: glow 2s infinite;
}
.cart-btn i{
    font-size: 20px;
    color: green;
}
.cart-btn{
    font-size: 20px;
    color: #2D619E;
    transition: box-shadow 0.18s ease, text-shadow 0.18s ease, transform 0.18s ease;
}
.cart-btn:hover {
    transform: translateY(-0.1em) translateX(0.1em);
}
@keyframes glow {
    0%{
        box-shadow: 0px 1px 5px 3px #2D619E;
    }
    50%{
        box-shadow: 0px 1px 9px 3px #2D619E;
    }
}

@media (max-width:520px) {
  #p-img{
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
  #Single-View{
    padding: 0;
  }
  #product{
    padding: 0;
  }
  .information{
    width: 290px;
  }
}
</style>