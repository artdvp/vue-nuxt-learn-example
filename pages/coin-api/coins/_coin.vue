<template>
    <div class="fflex">
        <h1>{{ name.toUpperCase() }}</h1>
        <p>Symbol : {{ coin.symbol }}</p>
        <p> Rank   : {{ coin.rank }} </p>
        <p> Price USD : {{ coin.price_usd }} </p>
        <br>
        <nuxt-link to="/coin-api">Get Back </nuxt-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://api.coinmarketcap.com/v1/ticker/${params.coin}/`
    );
    return {
      coin: data[0],
      name: params.coin
    };
  }
};
// https://medium.com/@MFaridZia/fetch-data-dari-third-party-api-dengan-nuxt-js-dan-axios-2c39f91a6997
</script>

<style scoped>
.fflex {
  margin-top: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
