<template>
  <section class="containerrr">
    <div>
      <app-logo/>
      <h1 class="title">
        Vue Project Example
      </h1>
      <div class="links">
       <nuxt-link  class="button--green" to="/vue-example">To Example</nuxt-link>
       <br><br>
       <nuxt-link  class="button--green" to="/coin-api">To Coin API</nuxt-link>
       <br><br>
       <nuxt-link  class="button--green" to="/vue-contribute">To Vue Contribute</nuxt-link>
       <br><br>
       <nuxt-link  class="button--green" to="/vue-hover-animate">To Vue Hover Animate</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  layout: "default",
  components: {
    AppLogo
  }
};
</script>

<style scoped>
.containerrr {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
