<template>
    <div class="container">
        <nuxt-link v-for="coin in coins" :key="coin.id" class="list-data" :to="'/coin-api/coins/'+ coin.id">
            {{ coin.name }}
        </nuxt-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "coins-layout",
  async asyncData() {
    const { data } = await axios.get(
      "https://api.coinmarketcap.com/v1/ticker/"
    );
    return {
      coins: data
    };
  }
};
</script>

<style scoped>
.container {
  width: 75%;
  margin: 50px auto;
  text-align: center;
}
.list-data {
  background: #ddd;
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
</style>
