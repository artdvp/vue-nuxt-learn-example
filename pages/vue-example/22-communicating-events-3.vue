<template>
  <div class="bodymaster">
    <div class="con-center">
      <nuxt-link to="/vue-example/">Back</nuxt-link>
    </div>
    <div class="button-group">
      <button @click="animateBall" v-if="!running">Start</button>
      <button @click="cancelAnimate" v-else>Reset</button>
      <height-counter @heightincrease="incrementHeight"></height-counter>
      <radius-counter @radiusincrease="incrementRadius"></radius-counter>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" class="bounce">
      <line x1="600" x2="600" y1="0" :y2="total+radius" stroke="#555" stroke-width="2" stroke-dasharray="5, 5" />
      <line x1="590" x2="610" y1="1" y2="1" stroke="#555" stroke-width="2" />
      <line x1="590" x2="610" :y1="total+radius" :y2="total+radius" stroke="#555" stroke-width="2" />
      <circle :style="{ transform: `translate3d(${x1}px, ${y1}px, 0)` }" :r="radius" :cx="radius" :cy="radius" fill="teal" />
    </svg>
  </div>
</template>

<script>
  import HeightCounter from "@/components/sdrasner/CommunicatingEvent3HightCounter";
  import RadiusCounter from "@/components/sdrasner/CommunicatingEvent3RadiusCounter";

  export default {
    components: {
      HeightCounter,
      RadiusCounter
    },
    data() {
      return {
        total: 200,
        radius: 15,
        x1: 15,
        y1: 15,
        g: 0.1,
        vx: 2.5,
        vy: 0,
        req: undefined,
        running: false
      };
    },
    methods: {
      incrementHeight() {
        this.total += 100;
      },
      incrementRadius() {
        this.radius += 1;
      },
      bounceBall() {
        this.vy += this.g; // gravity increases the vertical speed
        this.x1 += this.vx; // horizontal speed increments horizontal position
        this.y1 += this.vy; // vertical speed increases vertical position

        if (this.y1 > this.total - this.radius) {
          // if ball hits the ground
          this.y1 = this.total - this.radius; // reposition it at the ground
          this.vy *= -0.8; // then reverse and reduce its speed
        }
      },
      animateBall() {
        //use rAF to animate but put a boundary on it so it doesn't run forever
        if (process.browser) {
          let start,
            vueThis = this;
          this.running = true;

          function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            if (progress < 13000) {
              vueThis.bounceBall();
              vueThis.req = window.requestAnimationFrame(step);
            } else {
              vueThis.x1 = this.radius;
              vueThis.y1 = this.radius;
              vueThis.running = false;
            }
          }
          this.req = window.requestAnimationFrame(step);
        }
      },
      cancelAnimate() {
        cancelAnimationFrame(this.req);
        this.running = false;
        this.radius = 15;
        this.x1 = this.radius;
        this.y1 = this.radius;
        this.total = 200;
        this.g = 0.1;
        this.vx = 2;
        this.vy = 0;
      }
    }
  };

</script>

<style lang="scss">
  .bodymaster {
     background: #222;
     height: 100vh;
  }
  .con-center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .bounce {
    width: 100vw;
    height: 80vh;
  }

  .button-group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    // margin: 20px auto;
    button {
      font-family: "Montserrat", sans-serif;
      min-width: 80px;
      border: none;
      padding: 8px 16px;
      background: #444;
      color: white;
      border-radius: 3px;
      outline: 0;
      cursor: pointer;
      margin: 3px;
    }
  }
</style>
