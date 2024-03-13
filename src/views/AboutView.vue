<template>
  <div class="About container-fluid">
    <div class="head container">
      <h1>Welcome to</h1>
      <span class="bus-name">ArcHub</span>
    </div>
    <div class="body">
      <span class="ab-inf">
        <img src="https://iili.io/JWMhX14.png" alt="ab-1" class="ab-1">
        <span class="ab-text">
          <h4>who are we?</h4>
          <p>What started as a passion project, turned into a journey </p>
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutView",
}
</script>
<style>
.About {
  background: black;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bus-name{
  font-family: "Rubik Glitch Pop", system-ui;
  font-size: 6em;
  color: #2D619E;
  animation: glow 3s infinite ease-in;

}
@keyframes glow {
    0% {
        text-shadow: none;
    }

    50% {
        text-shadow: 0px 0px 6px #14c8f0;
    }

    100% {
        text-shadow: none;

    }
}
.ab-1{
  object-fit: cover;
  height: 450px;
  width: 500px;
}
.body{
  border: 3px solid blue;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.ab-inf{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
}
</style>