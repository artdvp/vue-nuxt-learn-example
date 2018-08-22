<template>
  <section class="center">
    <nuxt-link to="/vue-example/">Back</nuxt-link>
    <br>
    <h1>00 : Vue Directives</h1>
    <a href="https://github.com/artdvp/vue-nuxt-learn-example/blob/master/pages/vue-example/00-vue-directive.vue" target="_blank">Source</a>
    <br>
    <br>
    <hr>
    <br>
    <ul class="ulli">
      <li v-for="(item,index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "v-text",
        "v-html",
        "v-show",
        "v-if",
        "v-else",
        "v-else-if",
        "v-for",
        "v-on",
        "v-bind",
        "v-model",
        "v-pre",
        "v-cloak",
        "v-once"
      ]
    };
  }
};
</script>

<style scoped>
.ulli {
  list-style-type: none;
}
</style>
