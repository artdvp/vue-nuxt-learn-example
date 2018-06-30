<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>22 : Communicating Events - 2</h1>
        <p class="paContent">
        <br>
        <br><br>
        <br>
        <communicating-child1 :text="message" @changetext="message = $event"></communicating-child1>
        <br>
        <pre>{{ $data }}</pre>
        <br>
        <br>
        <a href="https://gyazo.com/3233343fbf095fc590bab96fe292baf2"><img src="https://i.gyazo.com/3233343fbf095fc590bab96fe292baf2.png" alt="https://gyazo.com/3233343fbf095fc590bab96fe292baf2" width="100%"/></a>
        </p>
    </section>
</template>

<script>
import CommunicatingChild1 from "@/components/sdrasner/CommunicatingChild1";

export default {
  components: {
    CommunicatingChild1
  },
  data() {
    return {
      message: "Hello mr. Artdvp 2"
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

