<template>
    <div class="Admin" v-if="this.userRole == 'Admin'">
        <div class="container tab-div">
            <h2>Users</h2>
            <button class="add" data-bs-toggle="modal" data-bs-target="#addUserModal">
                <i class="fa-solid fa-user-plus"></i>
            </button>
            <table class="table-secondary">
                <thead id="prod-row">
                    <tr id="prod-row">
                        <th scope="col">
                            UserID
                        </th>
                        <th scope="col">
                            First Name
                        </th>
                        <th scope="col">
                            Last Name
                        </th>
                        <th scope="col">
                            User Age
                        </th>
                        <th scope="col">
                            Gender
                        </th>
                        <th scope="col">
                            User Role
                        </th>
                        <th scope="col">
                            Email Add
                        </th>
                        <th scope="col">
                            Edit/Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.userID" id="prod-row">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.userRole }}</td>
                        <td class="btns">
                            <button @click="editUser(user.userID)" class="btn-edit" data-bs-toggle="modal"
                                data-bs-target="#editUserModal"><i class="fa-solid fa-user-pen"></i></button>
                            <button @click="delUser(user.userID)" class="btn-del"><i
                                    class="fa-solid fa-user-minus"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container tab-div">
            <h2>Products</h2>
            <button class="add" type="button" data-bs-toggle="modal" data-bs-target="#addproductModal">
                <i class="fa-solid fa-square-plus"></i>
            </button>
            <table class="table-secondary">
                <thead id="prod-row">
                    <tr id="prod-row">
                        <th scope="col">
                            ProdImg
                        </th>
                        <th scope="col">
                            ProdID
                        </th>
                        <th scope="col">
                            ProdName
                        </th>
                        <th scope="col">
                            Quantity
                        </th>
                        <th scope="col">
                            Amount
                        </th>
                        <th scope="col">
                            Category
                        </th>
                        <th scope="col">
                            Description
                        </th>
                        <th scope="col">
                            Edit/Delete
                        </th>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID" id="prod-row">
                        <td><img :src="product.prodUrl" alt="product-img" id="tab-img"></td>
                        <td>{{ product.ProductID }}</td>
                        <td>{{ product.ProductName }}</td>
                        <td>{{ product.Category }}</td>
                        <td>{{ product.Price }}</td>
                        <td>{{ product.ProdImg }}</td>
                        <td>{{ product.ProdDesc }}</td>
                        <td class="btns">
                            <button @click="editBtn(product.prodID)" class="btn-edit" data-bs-toggle="modal"
                                data-bs-target="#productModal"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button @click="delProd(product.prodID)" class="btn-del"><i
                                    class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="EditUserModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="EditUserModalTitle">Edit user</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="userPayload.firstName" type="text" name="name" placeholder="First Name"><br>
                        <input v-model="userPayload.lastName" type="text" name="surname" placeholder="Last Name"><br>
                        <input v-model="userPayload.userRole" type="text" name="role" placeholder="Role"><br>
                        <input v-model="userPayload.emailAdd" type="text" name="email" placeholder="Email address"><br>
                        <input v-model="userPayload.userProfile" type="text" name="profile" placeholder="Profile link"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editUserBtn()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addproductModalTitle">Add a Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="ProductName" type="text" name="name" placeholder="Product Name"><br>
                        <input v-model="Price" type="text" name="price" placeholder="Price"><br>
                        <input v-model="Category" type="text" name="Category" placeholder="Category"><br>
                        <input v-model="ProdImg" type="text" name="image" placeholder="Image Url"><br>
                        <input v-model="ProdDesc" type="text" name="description" placeholder="Description"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addProduct()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="" v-if="this.userRole !== 'Admin'">
    <h1></h1>
    </div>
</template>
<script>
import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies()
export default {
    name: "AdminView",
    components: {
    },
    data() {
        return {
            prodPayload: {
                prodID: null,
                ProductName: "",
                Price: "",
                Category: "",
                ProdImg: "",
                prodDesc: "",
            },
            userPayload: {
                userID: null,
                firstName: "",
                lastName: "",
                userPass: "",
                userAge: "",
                gender: "",
                userRole: "",
                emailAdd: "",
                userProfile: "",
            },
            userRole: ""
        }
    },
    methods: {
        editUser(id) {
            this.users.forEach((user) => {
                if (user.userID == +id) {
                    this.firstName = user.firstName
                    this.lastName = user.lastName
                    this.userRole = user.userRole
                    this.emailAdd = user.emailAdd
                    this.userProfile = user.userProfile

                    this.userPayload = {
                        userID: user.userID,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userAge: this.userAge,
                        gender: this.gender,
                        userRole: this.userRole,
                        emailAdd: this.emailAdd,
                        userProfile: this.userProfile
                    }
                }
            })
        },
        editUserBtn(){
            this.$store.dispatch('editUser', this.userPayload);
        },
        delUser(id){
            this.$store.dispatch('deleteUser', id);
        },
        getRole(){
            this.userRole =  cookies.get('userRole')
        },
        addProduct() {
            this.data = { ProductName: this.ProductName, Price: this.Price, Category: this.Category, ProdImg: this.ProdImg, ProdDesc: this.ProdDesc }
            this.$store.dispatch('addProduct', this.data);
        },
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
        this.getRole()
    }


}
</script>
<style></style>