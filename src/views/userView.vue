<template>
    <div id="single-view">
        <div class="userCard">
            <div class="image">
                <img :src="user.userProfileImg" alt="userImg" id="image">
            </div>
            <div class="information">
                <h1>{{ user.firstName }} {{ user.lastName }}</h1>
                <p>email Address: {{ user.emailAdd }}</p>
                <p>Contact Number {{ user.ContactNo }}</p>
                <div class="buttons">
                    <button @click="editUser(user.userID)" class="btn-edit" data-bs-toggle="modal"
                        data-bs-target="#editUserModal"><i class="fa-regular fa-pen-to-square"></i>Edit Profile</button>
                    <button type="button" class="btn btn-primary btn-del" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Delete Profile<i class="fa-solid fa-trash"></i></button>
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
                        <label>First Name</label>
                        <input v-model="userPayload.firstName" type="text" name="name" placeholder="First Name"><br>
                        <label>Last Name</label>
                        <input v-model="userPayload.lastName" type="text" name="surname" placeholder="Last Name"><br>
                        <label>Email Address</label>
                        <input v-model="userPayload.emailAdd" type="text" name="email" placeholder="Email address"><br>
                        <label>Profile Image Link</label>
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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body" id="delBody">
                        Are you sure you want to delete your profile?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button @click="delUser(user.userID)" type="button" class="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getRole } from "@/service/UserAuthentication.js";
export default {
    data() {
        return {
            userPayload: {
                userID: null,
                firstName: "",
                lastName: "",
                userRole: "",
                emailAdd: "",
                userProfileImg: ""
            },
            userID: ""
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        editUser(id) {
            this.firstName = this.user.firstName
            this.lastName = this.user.lastName
            this.userRole = this.user.userRole
            this.emailAdd = this.user.emailAdd
            this.userProfileImg = this.user.userProfileImg

            this.userPayload = {
                userID: id,
                firstName: this.firstName,
                lastName: this.lastName,
                userRole: this.userRole,
                emailAdd: this.emailAdd,
                userProfileImg: this.userProfileImg
            }
        },
        editUserBtn() {
            this.$store.dispatch('editUser', this.userPayload);
        },
        delUser(id) {
            if (id != 1) {
                this.$store.dispatch('deleteUser', id);
            }
            else {
                alert('cannot delete this admin!')
            }
        },
        delBtn() {

        }
    },
    mounted() {
        let navUser = getRole()
        if (navUser) {
            this.userRole = navUser.userRole
            this.userID = navUser.userID
        }
        this.$store.dispatch('fetchUser', this.userID)
    }
}
</script>

<style scoped>
#single-view {
    display: flex;
    justify-content: center;
    background: black;
}

.userCard {
    display: flex;
}

#image {
    height: 500px;
    width: 290px;
}

.btn-del {
    border: none;
    border-radius: 50%;
    color: #B01515;
    background: transparent;
    transition: transform 0.3s ease;
}

.btn-edit {
    border: none;
    border-radius: 50%;
    color: #2D619E;
    background: transparent;
    transition: transform 0.3s ease;
}

.btn-edit:hover {
    transform: translateY(-0.1em) translateX(0.1em);
}

.btn-del:hover {
    transform: translateY(-0.1em) translateX(0.1em);
}

.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
}

.information {
    text-align: left;
    padding: 10px;
}

.modal-body {
    text-align: right;
}
#delBody{
    text-align: center
}

@media (max-width:520px) {
  .userCard{
    display: flex;
    flex-direction: column;
  }
}
</style>