<template>
    <div class="Admin container-fluid" v-if="this.NavUserRole == 'Admin'">
        <h2>Users</h2>
        <button class="add" data-bs-toggle="modal" data-bs-target="#addUserModal">
            <i class="fa-solid fa-user-plus"></i>
        </button>
        <div class="user container">
            <div class="card" v-for="user in users" :key="user.userID">
                <div class="card-header">
                    <img :src="user.userProfileImg" alt="user-image" class="userimg">
                </div>
                <div class="card-body" id="c-body">
                    <p>User ID:</p>
                    <section>{{ user.userID }}</section>
                    <p>user Name:</p>
                    <section class="name">{{ user.firstName }} {{ user.lastName }}</section>
                    <p>User Role:</p>
                    <section>{{ user.userRole }}</section>
                    <p>Email Address:</p>
                    <section>{{ user.emailAdd }}</section>
                </div>
                <div class="card-footer">
                    <button @click="editUser(user.userID)" class="btn-edit" data-bs-toggle="modal"
                        data-bs-target="#editUserModal"><i class="fa-solid fa-user-pen" id="edit"></i></button>
                    <button @click="delUser(user.userID)" class="btn-del"><i
                            class="fa-solid fa-user-minus"></i></button>
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
        <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="productModalTitle"
            aria-hidden="true">
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
import { getRole } from '@/service/UserAuthentication.js';
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
        },
        delProduct(id) {
            this.$store.dispatch('deleteProduct', id)
        },
        role() {
            let user = getRole()
            if (user) {
                this.NavUserRole = user.userRole
            }
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
        let user = getRole()
        if (user) {
            this.NavUserRole = user.userRole
        }
    }


}
</script>
<style>
.Admin {
    min-height: 80vh;
    background: black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}
.add{
    width: 50px;
    background: transparent;
    color: #2D619E;
    border: none;
}

.user {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    width: 280px;
    background: white;
    padding: 3px;
}

.card-header {
    background-color: #1a1a1a;
    min-height: 220px;
}

#c-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.card-body p {
    margin: 0;
    color: #2D619E;
    font-size: 20px;
}

.card-body section {
    color: #1a1a1a;
    font-size: 15px;
}

.card-footer {
    display: flex;
    justify-content: space-evenly;
    background-color: #1a1a1a;
}

.userimg {
    border-radius: 20%;
    height: 200px;
    object-fit: cover;
}

.btn-del {
    border: none;
    border-radius: 50%;
    color: #B01515;
    background: transparent;
    transition: 0.5s;
    transition-property: box-shadow;
}

.btn-edit {
    border: none;
    border-radius: 50%;
    color: #2D619E;
    background: transparent;
    transition: 0.5s;
    transition-property: box-shadow;
}

.btn-edit:hover {
    box-shadow: 0 0 5px rgb(0, 140, 255),
        0 0 25px rgb(0, 140, 255),
        0 0 50px rgb(0, 140, 255),
        0 0 100px rgb(0, 140, 255);
}

.btn-del:hover {
    box-shadow: 0 0 5px #B01515,
        0 0 25px #B01515,
        0 0 50px #B01515,
        0 0 100px #B01515;
}
</style>