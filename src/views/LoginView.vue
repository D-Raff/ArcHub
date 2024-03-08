<template>
    <div class="Login">
        <div class="login-box">
            <form @submit.prevent>
                <div class="user-box">
                    <input v-model="emailAdd" type="text" name="" placeholder="EmailAddress">
                </div>
                <div class="user-box">
                    <input v-model="password" type="password" name="" placeholder="Password">
                </div>
                    <button class="btn-log" @click="login()"  type="submit">
                        Login
                        <span class="line"></span>
                    </button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            emailAdd: "",
            password: ""
        }
    },
    methods: {
        login(){
            this.data = { emailAdd: this.emailAdd, password: this.password}
            this.$store.dispatch('login', this.data)
        }
    },

}
</script>
<style>
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(24, 20, 20, 0.987);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
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
  t  ext-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px;
    background: transparent;
    border: none;
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