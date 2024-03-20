<template>
  <div class="About container-fluid">
    <div id="head">
      <span class="bus-name">ArcHub</span>
      <img src="https://iili.io/JXUHjCG.png" alt="robot" class="robot">
      <span class="intro">
        <p>Inspired by the legendary SuperHero Iron Man, we set out on a journey to build robots and ended up finding a passion for helping those without limbs
        </p>
      </span>
    </div>
    <div class="body">
      <span class="ab-inf">
        <img src="https://iili.io/JWMhX14.png" alt="ab-1" class="ab-1">
        <span class="ab-text">
          <h4>who are we?</h4>
          <p>What started as a passion project, turned into a journey of helping those who yearn for freedom of movement</p>
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
#head{
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
}
.bus-name{
  font-family: "Rubik Glitch Pop", system-ui;
  font-size: 16rem;
  color: #2D619E;
  position: absolute;
  top: -100px;
  left: 100px;
  z-index: 1;
}
.ab-1{
  object-fit: cover;
  height: 450px;
  width: 500px;
  box-shadow: 25px 20px 6px 2px rgba(255, 255, 255, 0.15)
}
.body{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.ab-inf{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.ab-text{
  border: 3px solid red;
  width: 50%;
  padding: 10px;
  text-align: left;
}
.robot{
  height: 900px;
  z-index: 2;
  position: relative;
  top: 10rem;
  left: -50px;
}
.intro{
  width: 50%;
  z-index: 3;
  font-size: 2em;
  text-align: left;
  position: relative;
}

</style>