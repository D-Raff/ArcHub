<template>
  <div id="Home">
    <div id="name">
      <span class="fade">
        <h2>Welcome to</h2>
        <span id="bus-name">ArcHub</span>
      </span>
      <h2 class="motto">Where Technology Meets Humanity</h2>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
#name{
  min-height: 85vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://iili.io/JXRPrpj.jpg');
  background-position: center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#bus-name{
  font-family: "Rubik Glitch Pop", system-ui;
  font-size: 8em;
  color: white;
  animation: glow 3s 2s infinite ease-in;
}
.fade{
  animation: fade-in 4s forwards;
  color: white;
  opacity: 0;
}
.motto{
  color: white;
  opacity: 0;
  animation: fade-in 3s 2s forwards;

}
@keyframes fade-in {
  from{
    opacity: 0%;
  }
  to{
    opacity: 100%;
  }
}
@keyframes glow {
    0% {
        text-shadow: none;
    }

    50% {
        text-shadow: 0px 0px 8px white;
    }

    100% {
        text-shadow: none;

    }
}
</style>