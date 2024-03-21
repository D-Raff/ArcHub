<template>
    <div class="loader-wrapper">
        <div class="loader">
            <div class="loader loader-inner"></div>
        </div>
        loading...
    </div>
</template>

<script>

</script>

<style scoped>
.loader-wrapper {
    width: 200px;
    height: 200px;
}

.loader {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 10px solid #162534;
    border-top-color: #4bc8eb;
    border-bottom-color: #4bc8eb;
    border-radius: 50%;
    animation: rotate0925 5s linear infinite;
}

.loader-inner {
    border-top-color: #4bc8eb;
    border-bottom-color: #4bc8eb;
    animation-duration: 2.5s;
}

@keyframes rotate0925 {
    0% {
        transform: scale(1) rotate(360deg);
    }

    50% {
        transform: scale(1) rotate(-360deg);
    }

    100% {
        transform: scale(1) rotate(360deg);
    }
}
</style>