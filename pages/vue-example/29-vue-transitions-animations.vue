<template>
  <section class="center">
    <div class="center">
      <nuxt-link to="/vue-example">Back</nuxt-link>
    </div>
    <br>
    <div class="main">
      <div class="app">
        <div v-bind:class="[isShowing ? blurClass : '', bkClass ]">
          <h3>Let's trigger this here model!</h3>
          <button @click="toggleShow">
            <span v-if="isShowing">Hide Show</span>
            <span v-else>Show Child</span>
          </button>
        </div>
        <transition name="fade">
          <app-child v-if="isShowing" class="modal">
            <button @click="toggleShow">Close</button>
          </app-child>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import childarea from "@/components/sdrasner/TransitionModal";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto+Mono"
        }
      ]
    };
  },
  components: {
    appChild: childarea
  },
  data() {
    return {
      isShowing: false,
      bkClass: "bk",
      blurClass: "blur"
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
.main {
  font-family: "Roboto Mono", serif;
  display: flex;
  justify-content: center;
}

.app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  font-family: "Roboto Mono";
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
}

h3 {
  margin: 0 0 15px;
}

.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.5s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}
</style>
