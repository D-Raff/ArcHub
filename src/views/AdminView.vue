<template>
    <div class="Admin container-fluid" v-if="this.NavUserRole == 'Admin'">
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
                            userProfileImg
                        </th>
                        <th scope="col">
                            First Name
                        </th>
                        <th scope="col">
                            Last Name
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
                        <td>{{ user.userProfileImg }}</td>
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
        <div class="user container">
            <div class="card" v-for="user in users" :key="user.userID">
                <div class="card-header">
                    <img :src="user.userProfileImg" alt="user-image" class="userimg">
                </div>
                <div class="card-body">
                    <p>User ID:</p>
                    <section>{{ user.userID }}</section>
                    <p>user Name:</p>
                    <p class="name">{{ user.firstName }} {{user.lastName}}</p>
                    <p>User Role:</p>
                    <section>{{ user.userRole }}</section>
                    <p>Email Address:</p>
                    <section>{{ user.emailAdd }}</section>
                    <section></section>
                    <section></section>
                </div>
                <div class="card-footer">

                </div>
            </div>
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
                            <button @click="editBtn(product.ProductID)" class="btn-edit" data-bs-toggle="modal"
                                data-bs-target="#editProductModal"><i class="fa-regular fa-pen-to-square"></i></button>
                            <button @click="delProduct(product.ProductID)" class="btn-del"><i
                                    class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserModalTitle">Add User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="firstName" type="text" name="name" placeholder="First Name"><br>
                        <input v-model="lastName" type="text" name="surname" placeholder="Last Name"><br>
                        <input v-model="userPassword" type="text" name="Password" placeholder="Password"><br>
                        <input v-model="userRole" type="text" name="role" placeholder="Role"><br>
                        <input v-model="emailAdd" type="text" name="email" placeholder="Email address"><br>
                        <input v-model="userProfileImg" type="text" name="profile" placeholder="Profile image link"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addUser()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="EditUserModalTitle"
            aria-hidden="true">
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
                        <input v-model="userPayload.userProfileImg" type="text" name="profile"
                            placeholder="Profile image link"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editUserBtn()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="productModalTitle"
            aria-hidden="true">
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
        <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productModalTitle">Edit product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodPayload.ProductName" type="text" name="name" placeholder="Product name"><br>
                        <input v-model="prodPayload.Price" type="text" name="amount" placeholder="Price"><br>
                        <input v-model="prodPayload.Category" type="text" name="category" placeholder=""><br>
                        <input v-model="prodPayload.ProdImg" type="text" name="imageUrl" placeholder=""><br>
                        <input v-model="prodPayload.ProdDesc" type="text" placeholder="" id="Desc"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editProduct()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="" v-if="this.NavUserRole !== 'Admin'">
        <h1>This Page is for admins only. If this message is displaying, you most likely do not belong here.</h1>
    </div>
</template>
<script>
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
export default {
    name: "AdminView",
    components: {
    },
    data() {
        return {
            prodPayload: {
                ProductID: null,
                ProductName: "",
                Price: "",
                Category: "",
                ProdImg: "",
                ProdDesc: "",
            },
            userPayload: {
                userID: null,
                firstName: "",
                lastName: "",
                userRole: "",
                emailAdd: "",
                userProfileImg: ""
            },
            NavUserRole: "",
            userPassword: ""

        }
    },
    methods: {
        addUser() {
            this.data = {
                userID: null,
                firstName: this.firstName,
                lastName: this.lastName,
                userPassword: this.userPassword,
                userRole: this.userRole,
                emailAdd: this.emailAdd,
                userProfileImg: this.userProfileImg
            }
            this.$store.dispatch('addUser', this.data)
        },
        editUser(id) {
            this.users.forEach((user) => {
                if (user.userID == +id) {
                    this.firstName = user.firstName
                    this.lastName = user.lastName
                    this.userRole = user.userRole
                    this.emailAdd = user.emailAdd
                    this.userProfileImg = user.userProfileImg

                    this.userPayload = {
                        userID: user.userID,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userRole: this.userRole,
                        emailAdd: this.emailAdd,
                        userProfileImg: this.userProfileImg
                    }
                }
            })
        },
        editUserBtn() {
            this.$store.dispatch('editUser', this.userPayload);
        },
        delUser(id) {
            this.$store.dispatch('deleteUser', id);
        },
        getRole() {
            this.NavUserRole = cookies.get('userRole')
        },
        addProduct() {
            this.data = { ProductName: this.ProductName, Price: this.Price, Category: this.Category, ProdImg: this.ProdImg, ProdDesc: this.ProdDesc }
            this.$store.dispatch('addProduct', this.data);
        },
        editProduct() {
            this.$store.dispatch('editProduct', this.prodPayload);
        },
        editBtn(id) {
            this.products.forEach((item) => {
                if (item.ProductID == +id) {
                    this.ProductName = item.ProductName
                    this.Price = item.Price
                    this.Category = item.Category
                    this.ProdImg = item.ProdImg
                    this.ProdDesc = item.ProdDesc

                    this.prodPayload = {
                        ProductID: item.ProductID,
                        ProductName: this.ProductName,
                        Price: this.Price,
                        Category: this.Category,
                        ProdImg: this.ProdImg,
                        ProdDesc: this.ProdDesc
                    }
                }
            })
            console.log(this.prodPayload);
        },
        delProduct(id) {
            this.$store.dispatch('deleteProduct', id)
        }
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
<style>
.Admin{
    min-height: 80vh;
}
.user{
    display: flex;
    gap: 20px;
}
.card{
    width: 280px;
}
.userimg{
    border-radius: 50%;
    height: 200px;
    object-fit: cover;
}
</style>