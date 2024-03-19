<template>
    <nav class="navbar navbar-expand-lg sticky-top" id="navBar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><router-link to="/"><img src="https://iili.io/JVXI1GS.png" alt="logo"
                        class="reactor-logo"></router-link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-list">
                    <li v-if="isCookie" class="nav-item" id="prof-div">
                        <router-link to="/userProfile" id="router-btn" v-if="isCookie"><img :src="user.userProfileImg" alt="user-image" id="mini-profile"></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" id="router-btn">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" id="router-btn">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link" id="router-btn">Store</router-link>
                    </li>
                    <li class="nav-item" v-if="this.userRole == 'Admin'">
                        <router-link to="/admin" class="nav-link" id="router-btn">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/checkout" class="nav-link" id="router-btn">Cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link" id="router-btn">Contact Us</router-link>
                    </li>
                    <li class="nav-item" v-if="!isCookie">
                        <router-link to="/login" class="nav-link" id="router-btn">Login/Sign Up</router-link>
                    </li>
                    <li @click="logout()" class="nav-item" v-else>
                        <router-link to="/login" class="nav-link" id="router-btn">Logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
/* eslint-disable */
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
import { getRole } from "@/service/UserAuthentication.js";
export default {
    data() {
        return {
            userRole: "",
            userID: "",
            isCookie: ""
        }
    },
    methods: {

        getCookie() {
            this.isCookie = cookies.isKey('VerifiedUser')
        },
        logout(){
            cookies.remove('VerifiedUser');
            cookies.remove('userRole')
            setTimeout(() => {
                location.reload()
            }, 500);
        }
    },
    computed:{
        user(){
            if (this.isCookie) {
                return this.$store.state.user
            }
        }
    },
    async mounted() {
        this.getCookie()
        let navUser = getRole()
        if(navUser){
            this.userRole = navUser.userRole
            this.userID = navUser.userID
        }
        if (this.isCookie) {
            await this.$store.dispatch('fetchUser', this.userID) 
        }
    }
}
</script>
<style scoped>
#navBar {
    background: black;
}

#nav-list {
    display: flex;
    gap: 10px;
}

#router-btn {
    text-decoration: none;
    color: #2D619E;
    font-weight: 700;
}

#router-btn:hover {
    color: #174478;
    animation: underglow 2s infinite;
}

.router-link-exact-active {
    color: #2D619E;
    text-decoration: underline !important;
    animation: glow 3s infinite ease-in;
}

.reactor-logo {
    height: 80px;
    animation: reactor 10s infinite;
}

#mini-profile{
    border-radius: 50%;
    height: 70px;
    aspect-ratio: 1/1;
    object-fit: contain;
    background-color: lightgray;
}
#prof-div{
    border-radius: 50%;
    height: 70px;
    width: 70px;
    color: white;
}

@keyframes reactor {
    0% {
        transform: rotate(0deg);
    }

    8% {
        filter: drop-shadow(0 0 5px #14c8f0);

    }

    15% {
        filter: drop-shadow(0 0 20px #14c8f0);

    }

    50% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes glow {
    0% {
        text-shadow: none;
    }

    50% {
        text-shadow: 0px 0px 10px #14c8f0;
    }

    100% {
        text-shadow: none;

    }
}

@keyframes underglow {
    0% {
        text-decoration: underline rgba(0, 0, 0, 1);
    }

    50% {
        text-decoration: underline #174478;
    }

    100% {
        text-decoration: underline rgba(0, 0, 0, 1);
    }
}

</style>