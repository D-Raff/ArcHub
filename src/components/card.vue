<template>
    <div class="outerCard">
        <div class="card">
            <slot name="prod-image" class="card-img-top"></slot>
            <div class="card-body">
                <slot name="Title"></slot>
            </div>
            <div class="card-footer">
                <slot name="btns"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "cardComp"
}
</script>
<style scoped>
.outerCard {
    width: 250px;
    height: 350px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 10px;
    transition: all .3s;
}

.card {
    width: 250px;
    height: 350px;
    background-color: #1a1a1a;
    transition: all .2s;
}

.card:hover {
    transform: scale(0.98);
    border-radius: 10px;
}

.outerCard:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
.card-footer{
    display: flex;
    justify-content: space-between;
    transition: all .2s;
}
.card-body{
    color: white;
}
</style>