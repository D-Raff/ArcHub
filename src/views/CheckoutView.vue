<template>
    <div class="Checkout">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody v-if="cart">
                <tr v-for="item in cart" :key="item.productID">
                    <td>{{ item.ProdImg }}</td>
                    <td>{{ item.ProductName }}</td>
                    <td>{{ item.Category }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.totalQty }}</td>
                    <button class="delete" @click="delfromcart(item.OrderID)">del</button>
                </tr>
            </tbody>
        </table>
        <button @click="clearCart()">clear cart</button>
    </div>
</template>
<script>
import {getRole} from '@/service/UserAuthentication';
export default {
    name: "CheckoutView",
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
        }

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
<style></style>