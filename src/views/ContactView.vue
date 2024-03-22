<template>
    <div class="Contact container-fluid">
        <div class="jarv-container">
            <div class="stat circ"></div>
            <div class="outerm circ"></div>
            <div class="out circ"></div>
            <div class="mid circ"></div>
            <div class="mid2 circ"></div>
            <div class="mid3 circ"></div>
            <div class="in circ"></div>
            <div class="inmost3 circ"></div>
            <div class="inmost2 circ"></div>
            <div class="inmost circ"></div>
        </div>
        <div class="info">
            <h1>Feel free to contact us:</h1>
        </div>
        <form class="form" target="_blank" action="https://formspree.io/f/moqgnrnr" method="POST">
            <label>
                Your email:
                <input v-model="formData.email" type="email" class="field" name="email">
            </label>
            <label>
                Your Contact Number:
                <input v-model="formData.number" type="number" class="field" name="phone">
            </label>
            <label>
                Your message:
                <textarea v-model="formData.message" class="field" name="message"></textarea>
            </label>
            <button @click="formSubmit()" type="submit">Send</button>
        </form>
    </div>
</template>
<script>
// import axios from "axios"
export default {
    name: "ContactView",
    data() {
        return {
            formData: {
                email: '',
                number: '',
                message: ''
            }
        }
    },
    methods: {},
}
</script>
<style scoped>
.Contact {
    position: relative;
    min-height: 84vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    padding-bottom: 0.4em;
    background-color: rgba(24, 20, 20, 0.5);
    border-radius: 25px;
    transition: .4s ease-in-out;
    width: 300px;
    height: 500px;
    z-index: 1;
}

.field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}
.info{
    z-index: 1;
}

.jarv-container {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
}

.circ {
    border-radius: 50%;
    aspect-ratio: 1/1;
    position: absolute;
}

.stat {
    height: 80%;
    border: 25px solid #0088ff;
}

.outerm {
    width: 30%;
    border: 20px solid rgba(0, 0, 0, 0);
    border-bottom: 20px solid #0088ff;
    border-left: 20px solid #0088ff;
    animation: jarv 5s linear infinite;
}

.out {
    width: 29.5%;
    border: 10px solid #0088ff;
}

.mid {
    width: 20%;
    border: 32px solid rgba(0, 0, 0, 0);
    border-bottom: 32px solid #005aa8;
    animation: jarv2 3.5s linear infinite reverse;
}

.mid2 {
    width: 20%;
    border: 20px solid rgba(0, 0, 0, 0);
    border-top: 20px solid #005aa8;
    border-right: 20px solid #005aa8;
    animation: jarv 3.5s linear infinite reverse;
}

.mid3 {
    width: 20px;
    border: 172px solid rgba(0, 0, 0, 0);
    border-top: 172px solid #0088ff4b;
    border-right: 172px solid #0088ff4b;
    animation: jarv 3.5s linear infinite reverse;
}

.in {
    width: 11%;
    border: 10px solid #0088ff;
    border-bottom: 5px solid #00000000;
    rotate: 45deg;
    animation: jarv2 2s linear infinite;
}

.inmost3 {
    width: 35px;
    background: #0088ff;
}

.inmost2 {
    width: 80px;
    border: 13px solid #0088ff;

}

.inmost {
    width: 8%;
    border: 26px solid #0088ff;
    border-top: 26px solid #00000000;
    border-bottom: 26px solid #00000000;
    animation: jarv 1s linear infinite reverse;
}

@keyframes jarv {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes jarv2 {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}
@media (max-width:520px) {
  .jarv-container{
    width: 300px;
  }
}
</style>