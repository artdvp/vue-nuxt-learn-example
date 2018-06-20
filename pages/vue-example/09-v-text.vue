<template>
    <section class="center">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>09 : V-TEXT</h1>
        <p>
         Similar to using mustache template
        <br>
        <br>
        </p>
        <h3>What is your favorite kind of taco?</h3>
        <p v-text="tacos"></p>
        <p>{{ tacos }}</p>
        <p><input v-model="tacos" /></p>
        <br>
        <br>
    </section>
</template>

<script>
export default {
  data() {
    return {
      tacos: "I like Al Pastor tacos"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

