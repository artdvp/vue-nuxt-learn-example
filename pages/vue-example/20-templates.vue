<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>20 : Templates</h1>
        <p class="paContent">
        <br>
         Vue.js uses HTML-based template syntax to bind the Vue instance to the DOM, very useful for components.
        <br>
        Templates are optional, you can also write render functions with optional JSX support.
        <br>
        We will start with strings (only useful for small cases) and then to script, and then to single-file templates in the next section.
        </p>
        <br>
        <hello></hello>
    </section>
</template>

<script>
import Hello from "@/components/sdrasner/HelloComponent";
export default {
  components: {
    Hello
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.fflex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: black;
  color: white;
  height: 100vh;
}
.none-style {
  list-style-type: none;
}
.paContent {
  width: 40%;
}
</style>

