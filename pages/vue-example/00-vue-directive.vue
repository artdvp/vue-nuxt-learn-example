<template>
    <section class="center">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <h1>00 : Vue Directives</h1>
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
