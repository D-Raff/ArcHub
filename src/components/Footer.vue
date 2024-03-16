<template>
    <div class="container-fluid footer">
        <div class="links">
            <div class="quick-links">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About us</router-link>
                <router-link to="/products">Store</router-link>
                <router-link to="/checkout">Cart</router-link>
                <router-link to="/contact">Contact Us</router-link>
                <router-link to="/login">login/signUp</router-link>
            </div>
            <div class="socials">
                <h5>contact us</h5>
                <span class="contact-pers">
                    <h6>Damon Raffels: CEO</h6>
                    <a href="https://wa.me/0827881888" target="_blank">
                        Phone/whatsapp: <i class="fa fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/damon.raffels/" target="_blank">
                        Instagram: <i class="fa fa-instagram"></i>
                    </a>
                    <a href="damonraffels@gmail.com" target="_blank">
                        email: <i class="fa-regular fa-envelope"></i>
                    </a>
                </span>
            </div>
        </div>
        <div class="copyright">ArcHub&copy; {{ currYear }}</div>
    </div>
</template>
<script>
export default {
    name: "footerComp",
    data() {
        return {
            currYear: new Date().getFullYear()
        }
    },
}
</script>
<style>
.footer {
    background: black;
    min-height: 20vh;
    color: #2D619E;
}

.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
}

.quick-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 13px;
}
.contact-pers a{
    text-decoration: none;
    font-size: 15px;
    color: #2D619E;
}
.contact-pers{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>