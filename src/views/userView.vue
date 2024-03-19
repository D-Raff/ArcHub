<template>
    <div id="single-view">
        <div class="card">
            <div class="image">
                <img :src="user.userProfileImg" alt="userImg"  id="image">
            </div>
            <div class="information">
                <h1>{{ user.firstName }} {{ user.lastName }}</h1>
                <p>email Address: {{ user.emailAdd }}</p>
                <p>Contact Number {{ user.ContactNo }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getRole } from "@/service/UserAuthentication.js";
export default {


    computed: {
        data() {
            return {
                userID: ""
            }
        },
        user() {
            return this.$store.state.user
        }
    },
    methods: {
    },
    mounted() {
        let navUser = getRole()
        if(navUser){
            this.userRole = navUser.userRole
            this.userID = navUser.userID
        }
        this.$store.dispatch('fetchUser', this.userID)
    }
}
</script>

<style scoped>
#image{
    height: 500px;
}
</style>