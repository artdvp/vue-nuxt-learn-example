<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>22 : Communicating Events - 4</h1>
        <h2>Components : Data must be a function</h2>
        <div class="app">
          <div class="unit" v-for="unit in manifest" :key="unit.id">
            <communicating-event3-card-product :item="unit.item" :url="unit.url"></communicating-event3-card-product>
          </div>
        </div>
    </section>
</template>

<script>
import CommunicatingEvent3CardProduct from "@/components/sdrasner/CommunicatingEvent3CardProduct";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat|PT+Serif"
        }
      ]
    };
  },
  components: {
    CommunicatingEvent3CardProduct
  },
  data() {
    return {
      item: "backpack",
      counter: 0,
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg",
      manifest: [
        {
          id: 1,
          item: "backpack",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg"
        },
        {
          id: 2,
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg"
        },
        {
          id: 3,
          item: "sweatshirt",
          url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  font-family: "PT Serif", serif;
  display: flex;
  justify-content: center;
}

.fflex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: black;
  color: white;
}

.none-style {
  list-style-type: none;
}

.paContent {
  width: 40%;
}

li {
  list-style: none;
  display: inline-block;
}
</style>

