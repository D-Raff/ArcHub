<template>
  <div class="About container-fluid">
    <div id="head">
      <span class="bus-name">ArcHub</span>
      <img src="https://iili.io/JXUHjCG.png" alt="robot" loading="lazy" class="robot">
      <span class="intro">
        <p>Inspired by the legendary SuperHero Iron Man, we set out on a journey to build robots and ended up finding a
          passion for helping those who yearn for freedom of movement
        </p>
      </span>
    </div>
    <div class="body">
      <span class="ab-inf">
        <img src="https://iili.io/JWMhX14.png" alt="ab-1" loading="lazy" class="ab-1">
        <span class="ab-text">
          <h4>who are we?</h4>
          <p>We started as a small company making robotic arms that could do every day tasks, with the vision of taking
            of our knowledge and building full, exo-suit style robots inspired by iron man.</p>
        </span>
      </span>
      <span class="ab-inf">
        <span class="ab-text">
          <h4>Our mission?</h4>
          <p>To enrich the lives of people everywhere by providing those who need it with meticulously crafted and
            designed limbs, created by our robitcs engineers</p>
        </span>
        <img src="https://iili.io/JW1UW5Q.png" alt="ab-2" loading="lazy" class="ab-2">
      </span>
      <span class="ab-inf">
        <img src="https://iili.io/JW1UAJ4.png" alt="ab-1" loading="lazy" class="ab-1">
        <span class="ab-text-goals">
          <h4>Our goals for the future</h4>
          <p>Through constant research and development and development , we are planning to be able mass produce our
            robotic helpers to aid people with intricate work, from building small and complicated electrical devices,
            all the way to one day being able to assist doctors in operating rooms all over the world!</p>
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
<style scoped>
.About {
  background: black;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#head {
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-top: 30px;
}

.bus-name {
  font-family: "Rubik Glitch Pop", system-ui;
  font-size: 10rem;
  color: #2D619E;
  position: absolute;
  top: -50px;
  left: 0;
  z-index: 1;
}

.ab-1 {
  object-fit: cover;
  height: 450px;
  width: 500px;
  box-shadow: 25px 20px 6px 2px rgba(255, 255, 255, 0.15)
}

.ab-2 {
  object-fit: cover;
  height: 450px;
  width: 500px;
  box-shadow: -25px 20px 6px 2px rgba(255, 255, 255, 0.15)
}

.body {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
}

.ab-inf {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.ab-text {
  border: 3px solid red;
  width: 50%;
  height: fit-content;
  padding: 10px;
  text-align: left;
  font-size: 1.8rem;
}

.ab-text-goals {
  border: 3px solid red;
  width: 50%;
  height: fit-content;
  padding: 10px;
  text-align: left;
  font-size: 1.5rem;
}

h4 {
  font-size: 3rem;
}

.robot {
  height: 550px;
  z-index: 2;
  position: relative;
}

.intro {
  width: 50%;
  z-index: 3;
  font-size: 1.5em;
  text-align: left;
  position: relative;
}

@media (max-width:700px) {
  .bus-name{
    position: relative;
    font-size: 6rem;
  }
  #head{
    justify-content: center;
  }
}
@media (max-width:520px) {
  .bus-name{
    position: relative;
    font-size: 4rem;
  }
  #head{
    justify-content: center;
  }
  .ab-1{
    width: 298px;
    height: 300px;
  }
  .ab-2{
    width: 298px;
    height: 300px;
  }
  .ab-text{
    width: 298px;
  }
  .ab-text-goals{
    width: 300px;
  }
  .intro{
    font-size: 1rem;
  }
  .body{
    width: 100%;
  }
  .About{
    padding: 0
  }
}

</style>