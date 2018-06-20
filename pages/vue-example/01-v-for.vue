<template>
    <section class="center">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <h1>01 : v-for</h1>
        <p>
            Loops through a set of values
        </p>
        <br>
        <h4>v-for - Array</h4>
        <br>
        <ul class="ulli">
            <li v-for="(item,index) in items" :key="index">
                {{ item }}
            </li>
        </ul>
        <br>
        <h4>v-for - lit number</h4>
        <ul class="ulli">
            <li v-for="(num,index) in 5" :key="index">
                {{ num }}
            </li>
        </ul>
        <br>
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
