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
    height: 360px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 10px;
    transition: all .3s;
}

.card {
    width: 250px;
    height: 360px;
    transition: all .2s;
    background: #1a1a1a;
}

.card:hover {
    border-radius: 10px;
    transform: scale(0.98);
}
.card:hover {
    transform: translateY(-0.1em) translateX(0.1em);
}
.outerCard:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
.card-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .2s;
    background: #1a1a1a;
    height: px;
}
.card-body{
    background: white;
}
</style>