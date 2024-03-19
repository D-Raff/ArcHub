<template>
    <div class="container-fluid" id="login">
        <h1>Please Log in</h1>
        <div class="login-box">
            <form @submit.prevent>
                <div class="user-box">
                    <input v-model="emailAdd" type="text" name="" placeholder="EmailAddress">
                </div>
                <div class="user-box">
                    <input v-model="password" type="password" name="" placeholder="Password">
                </div>
                <button class="btn-log" @click="login()" type="submit">
                    Login
                    <span class="line"></span>
                </button>
                <router-link to="/sign-up">sign up</router-link>
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
        login() {
            this.data = { emailAdd: this.emailAdd, userPassword: this.password }
            this.$store.dispatch('login', this.data)
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
    letter-spacing: 4px;
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


.main {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #240046;
  height: 80vh;
  width: 500px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 7px 7px 10px 3px #24004628;
}

.form {
    max-height: 420px;
    width: 500px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
}

/*checkbox to switch from sign up to login*/
#chk {
  display: none;
}

/*Login*/
.login {
  position: relative;
  width: 100%;
  height: 100%;
}

.login label {
  margin: 25% 0 5%;
}

label {
  color: #fff;
  font-size: 2rem;
  justify-content: center;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}

.input {
  width: 100%;
  height: 40px;
  background: #e0dede;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
}

/*Register*/
.register {
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(5%);
  transition: .8s ease-in-out;
}

.register label {
  color: #573b8a;
  transform: scale(.6);
}

#chk:checked ~ .register {
  transform: translateY(-60%);
}

#chk:checked ~ .register label {
  transform: scale(1);
  margin: 10% 0 5%;
}

#chk:checked ~ .login label {
  transform: scale(.6);
  margin: 5% 0 5%;
}   
/*Button*/
.form button {
  width: 85%;
  height: 40px;
  margin: 12px auto 10%;
  color: #fff;
  background: #573b8a;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s ease-in;
}

.form button:hover {
  background-color: #6d44b8;
}
</style>