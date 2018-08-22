<template>
  <section class="center">
    <div class="center">
      <nuxt-link to="/vue-example">Back</nuxt-link>
    </div>
    <br>
    <div class="main">
      <div class="app">
        <a href="https://gyazo.com/84a40da6be9a1057e09f2208cbbba8ba"><img src="https://i.gyazo.com/84a40da6be9a1057e09f2208cbbba8ba.png" alt="Image from Gyazo" width="332"/></a>
        <br>
        <a href="https://gyazo.com/76c353304e5993252bc6c62413acf7e0"><img src="https://i.gyazo.com/76c353304e5993252bc6c62413acf7e0.png" alt="Image from Gyazo" width="480"/></a>
        <br>
        <a href="https://gyazo.com/43d98b90230d61fe380ab5b3ed76a250"><img src="https://i.gyazo.com/43d98b90230d61fe380ab5b3ed76a250.png" alt="Image from Gyazo" width="696"/></a>
      </div>
    </div>
  </section>
</template>

<script>

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
  }
};
</script>

<style lang="scss" scoped>

</style>
