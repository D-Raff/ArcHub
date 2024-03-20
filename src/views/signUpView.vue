<template>
    <div class="container-fluid" id="login">
        <h1>Please Log in</h1>
        <div class="login-box">
            <form @submit.prevent>
                <div class="user-box">
                    <input required v-model="firstName" type="text" name="" placeholder="First Name">
                </div>
                <div class="user-box">
                    <input required v-model="lastName" type="text" name="" placeholder="Last Name">
                </div>
                <div class="user-box">
                    <input required v-model="emailAdd" type="text" name="" placeholder="EmailAddress">
                </div>
                <div class="user-box">
                    <input v-model="ContactNo" type="password" name="" placeholder="Contact Number *optional">
                </div>
                <div class="user-box">
                    <input required v-model="password" type="password" name="" placeholder="Password">
                </div>
                <button class="btn-log" @click="register()" type="submit">
                    Sign up
                    <span class="line"></span>
                </button>
                <router-link to="/Login">Log in</router-link>
            </form>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            emailAdd: "",
            ContactNo: "",
            password: ""
        }
    },
    methods: {
        register() {
            this.data = { firstName: this.firstName, lastName: this.lastName, ContactNo: this.ContactNo, emailAdd: this.emailAdd, userPassword: this.password }
            this.$store.dispatch('register', this.data)
        }
    },

}
</script>
<style scoped>
#login {
    height: 85vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: url('https://iili.io/JW1p5k7.jpg');
    background-position: top;
}

.login-box {
    position: relative;
    width: 400px;
    padding: 40px;
    background: rgba(24, 20, 20, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-box {
    position: relative;
}

.user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #B01515;
    outline: none;
    background: transparent;
}

.btn-log {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #B01515;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    background: transparent;
    border: none;
    width: 120px;
}

.btn-log:hover {
    background: #14c8f0;
    color: #B01515;
    border-radius: 5px;
    box-shadow: 0 0 5px #14c8f0,
        0 0 25px #14c8f0,
        0 0 50px #14c8f0,
        0 0 100px #14c8f0;
}

.line {
    position: absolute;
    display: block;
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #14c8f0);
    animation: btn-anim1 2s linear infinite;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}


</style>