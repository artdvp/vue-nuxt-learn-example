<template>
    <section class="center">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <h1>06 : V-ONCE and V-PRE</h1>
        <p>
           Not quite as useful, v-once will not update once it's been renderd.

           <br>
           v-pre will print out the inner text exactly how it is, including code (good for documentation)
        </p>
        <br>
        <h3>Type here : v-once and v-pre</h3>
        <br>
          <h3>What is your favorite kind of taco?</h3>
            <br>
            <p><input v-model="tacos" /></p>
            <br>
            <p v-once>{{ tacos }}</p>
            <br>
            <span v-pre>This is good if I need to show the mustache view of {{ tacos }}</span>
            <br>
            <ve></ve>
            <pre>{{ $data }}</pre>
        <br>
        <br>
        <hr>
        <br>
  
    </section>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      num: 0,
      tacos: "I like Al Pastor tacos",
      activeClass: "active"
    };
  }
};
</script>

<style scoped>
button {
  border: none;
  color: white;
  padding: 0.5em 1em;
  border-radius: 3px;
}
button.active {
  background: orangered;
}
</style>
