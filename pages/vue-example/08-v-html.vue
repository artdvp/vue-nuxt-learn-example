<template>
    <section class="center">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <br>
        <h1>08 : V-HTML</h1>
        <p>
         Great for strings that have html elements that need to be rendered!
        <br>
        <br>
        </p>
        <h3>What is your favorite kind of taco?</h3>
        <p v-html="tacos"></p>
        <br>
        <br>
    </section>
</template>

<script>
export default {
  data() {
    return {
      tacos: `I like <a href="http://www.epicurious.com/recipes/food/views/tacos-al-pastor-242132" target="_blank">Al Pastor</a> tacos`
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

