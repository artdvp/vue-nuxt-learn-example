<template>
  <section class="center">
    <div class="center">
      <nuxt-link to="/vue-example">Back</nuxt-link>
    </div>
    <br>
    <div class="app">
      <h3>Bounce the Ball</h3>
      <button @click="toggleShow">
        <span v-if="isShowing">Get it gone!</span>
        <span v-else>Here we go!</span>
      </button>
      <transition name="ballmove" enter-active-class="bouncein" leave-active-class="rollout">
        <div v-if="isShowing">
          <app-child class="child"></app-child>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import CssAnimation from "@/components/sdrasner/CSSAnimation";
export default {
  components: {
    appChild: CssAnimation
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Bitter"
        }
      ]
    };
  },
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin ballb($yaxis: 0) {
  transform: translate3d(0, $yaxis, 0);
}

section {
  font-family: "Bitter", serif;
  width: 100vw;
  height: 100vh;
  background: #eeeeee;
  /* Old browsers */
  background: -moz-linear-gradient(top, #eeeeee 0%, #cccccc 65%, #eeeeee 99%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #eeeeee 0%,
    #cccccc 65%,
    #eeeeee 99%
  );
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #eeeeee 0%, #cccccc 65%, #eeeeee 99%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#eeeeee', GradientType=0);
  /* IE6-9 */
}
.app {
  text-align: center;
  margin: 60px;
  max-width: 320px;
  margin: 0 auto;
  display: table;
}
.num {
  color: #af007e;
}
button {
  font-family: "Bitter";
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}
h3 {
  margin: 0 0 15px;
}
hr {
  border-color: #f2faff;
  opacity: 0.5;
  margin: 15px 0;
}
@keyframes bouncein {
  1% {
    @include ballb(-400px);
  }
  20%,
  40%,
  60%,
  80%,
  95%,
  99%,
  100% {
    @include ballb();
  }
  30% {
    @include ballb(-80px);
  }
  50% {
    @include ballb(-40px);
  }
  70% {
    @include ballb(-30px);
  }
  90% {
    @include ballb(-15px);
  }
  97% {
    @include ballb(-10px);
  }
}
@keyframes rollout {
  0% {
    transform: translate3d(0, 300px, 0);
  }
  100% {
    transform: translate3d(1000px, 300px, 0);
  }
}
@keyframes ballroll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1000deg);
  }
}
.ballmove-enter {
  @include ballb(-400px);
}
.bouncein {
  animation: bouncein 0.9s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
.rollout {
  width: 60px;
  height: 60px;
  animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  div {
    animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
}
</style>
