<template>
  <section class="content">
    <div class="center">
      <nuxt-link to="/vue-example">Back</nuxt-link>
    </div>
    <div class="center">
      <h1>Your Upcoming Destinations</h1>
    </div>
    <div class="location-contain">
      <div v-for="location in locations" :key="location.name" class="locations">
        <slotex :location="location">
          <h2>{{ location.name }}</h2>
        </slotex>
      </div>
    </div>
  </section>
</template>

<script>
import slotex from "@/components/sdrasner/SlotsExercise";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=NTR"
        }
      ]
    };
  },
  components: {
    slotex
  },
  data() {
    return {
      locations: [
        {
          name: "moscow",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg",
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
        },
        {
          name: "paris",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg",
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        },
        {
          name: "rome",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg",
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
        },
        {
          name: "paris",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg",
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
  font-family: "NTR", sans-serif;
  background: #eee;
}

.location-contain {
  display: flex;
  justify-content: center;
}
</style>
