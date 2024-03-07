<template>
    <nav class="navbar navbar-expand-lg" id="navBar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><router-link to="/home"><img src="https://iili.io/JVXI1GS.png" alt="logo" class="reactor-logo"></router-link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="nav-list">
                    <li class="nav-item">
                        <router-link to="home" class="router-btn">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="about" class="router-btn">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="products" class="router-btn">Store</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="admin" class="router-btn">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="checkout" class="router-btn">Cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="contact" class="router-btn">Contact Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style>
#navBar {
    background: black;
}

#nav-list {
    display: flex;
    gap: 5px;
}

.router-btn {
    text-decoration: none;
    color: #2D619E;
}

.router-link-exact-active {
    color: #2D619E;
    text-decoration: underline;
    animation: glow 3s infinite;
}

.reactor-logo{
    height: 80px;
    animation: reactor 10s infinite;
}
@keyframes reactor {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(360deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

@keyframes glow {
    0% {
        text-shadow: 0px 0px 2px #488AD7;
    }

    50% {
        text-shadow: 0px 0px 10px #488AD7;
    }

    100% {
        text-shadow: 0px 0px 2px #488AD7;

    }
}
</style>