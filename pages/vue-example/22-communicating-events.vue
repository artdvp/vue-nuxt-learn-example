<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>22 : Communicating Events</h1>
        <p class="paContent">
        <br>
        <br><br>
        <br>
        <communicating-child :text="message"></communicating-child>

        <br>
        <br>
        <a href="https://gyazo.com/3233343fbf095fc590bab96fe292baf2"><img src="https://i.gyazo.com/3233343fbf095fc590bab96fe292baf2.png" alt="https://gyazo.com/3233343fbf095fc590bab96fe292baf2" width="100%"/></a>
        </p>
    </section>
</template>

<script>
import CommunicatingChild from "@/components/sdrasner/CommunicatingChild";

export default {
  components: {
    CommunicatingChild
  },
  data() {
    return {
      message: "Hello mr. Artdvp"
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
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
</style>

