<template>
  <section class="center app">
    <div class="center">
      <nuxt-link to="/vue-example">Back</nuxt-link>
    </div>
    <h3>Let's check out the lifecycle of this hur' child.</h3>
    <h4>Check the console!</h4>
    <a href="https://scotch.io/tutorials/demystifying-vue-lifecycle-methods" target="_blank">Demystifying Vue Lifecycle Methods</a>
    <br>
    <br>
    <button @click="toggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <hr>
    <div v-if="isShowing">
      <child-area></child-area>
    </div>

    <br>
    <br>
    <a href="https://gyazo.com/917b32203aa2d274c650d1dcf19d72e3">
      <img src="https://i.gyazo.com/917b32203aa2d274c650d1dcf19d72e3.png" alt="Image from Gyazo" width="632" />
    </a>
    <br>
    <br>
    <p>
      Lifecycle hooks also auto-bind to the instance so that you can use the component’s state, and methods. Again, you don't have
      to console.log to find out what this refers to!
    </p>
    <br>
    <p>
      For this reason though, you shouldn’t use an arrow function on a lifecycle method, as it will return the parent instead of
      giving you nice binding out of the box.
    </p>
  </section>
</template>

<script>
import ChildArea from "@/components/sdrasner/LifecycleHooksChild";

export default {
  components: {
    ChildArea
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
.app {
  font-family: "Bitter", serif;
  text-align: center;
  margin: 60px;
  max-width: 420px;
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

h4 {
  margin: 0 0 15px;
}

hr {
  border-color: #f2faff;
  opacity: 0.5;
  margin: 15px 0;
}
</style>
