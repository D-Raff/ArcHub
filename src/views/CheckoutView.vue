<template>
    <div class="container-fluid" id="Checkout">
        <div v-if="cart" id="table">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        <th scope="col">Reduce</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart" :key="item.productID">
                        <td>
                            <img :src="item.ProdImg" alt="prod-img" id="image">
                        </td>
                        <td>{{ item.ProductName }}</td>
                        <td>{{ item.Category }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.totalQty }}</td>
                        <td v-if="item.quantity > 1" >
                            <button class="delete" @click="delfromcart(item.OrderID)">reduce</button>
                        </td>
                        <td v-else>
                            <button class="delete" @click="delfromcart(item.OrderID)">del</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button @click="clearCart()" class="clear">clear cart</button>
        </div>
        <div v-else class="spinner">
            <h1>
                No Products in cart
            </h1>
            <spinner/>
        </div>

    </div>
</template>
<script>
import { getRole } from '@/service/UserAuthentication';
import spinner from "@/components/SpinnerComp";
export default {
    name: "CheckoutView",
    components:{
        spinner
    },
    data() {
        return {
            userID: ""
        }
    },
    methods: {
        delfromcart(id) {
            this.$store.dispatch('delFromCart', id);
        },
        clearCart() {
            this.$store.dispatch('clearCart')
        },
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
    },
    mounted() {
        let user = getRole()
        if (user) {
            this.userID = user.userID
        }
        this.$store.dispatch('fetchCart', this.userID)
    }
}
</script>
<style scoped>
#Checkout{
    min-height: 80vh ;
    background: black;
}
.spinner{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#image{
    height: 100px;
    width: 100px;
    object-fit: cover;
}
#table{
    overflow-y: auto;
}
#table::-webkit-scrollbar {
    display: block !important;
}

::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #2D619E;
    border-radius: 10px;
}
.clear{
    border-radius: 10px;
    background: transparent;
    border: none;
    color: green;
    font-size: 20px;
    transition: text-shadow 0.3s ease, transform 0.3s ease;
    margin-bottom: 5px
}
.clear:hover {
    transform: translateY(-0.1em) translateX(0.1em);
    box-shadow: -6px 4px rgb(6, 59, 6);
}

.clear:active {
  transform: translateY(0em);
}
.delete{
    border-radius: 10px;
    background: black;
    border: 2px solid blue;
    color: white;
    font-size: 20px;
    transition: text-shadow 0.3s ease, transform 0.3s ease;
    margin-bottom: 5px
}
.delete:hover {
    transform: translateY(-0.1em) translateX(0.1em);
}

.delete:active {
  transform: translateY(0em);
}

</style>