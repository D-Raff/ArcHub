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
    gap: 10px;
}

.router-btn {
    text-decoration: none;
    color: #2D619E;
}
.router-btn:hover{
    color: #174478;
    animation: underglow 2s infinite;
}

.router-link-exact-active {
    color: #2D619E;
    text-decoration: underline;
    animation: glow 3s infinite ease-in;
}

.reactor-logo{
    height: 80px;
    animation: reactor 10s infinite;
}
@keyframes reactor {
    0%{
        transform: rotate(0deg);
    }
    8%{
        filter: drop-shadow(0 0 5px #14c8f0);
        
    }
    15%{
        filter: drop-shadow(0 0 20px #14c8f0);

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
    0%{
        text-decoration: underline rgba(0, 0, 0, 1);
    }
    50%{
        text-decoration: underline #174478;
    }
    100%{
        text-decoration: underline rgba(0, 0, 0, 1);
    }
}
</style>