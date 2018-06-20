<template>
    <section class="center">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <h1>05 : V-BIND or :</h1>
        <p>
           One of the most useful directives so there's a shotcut! We can use ot for sp many things- class and style binding, creating dynamic props, etc...
        </p>
        <br>
        <h3>Type here : v-bind class </h3>
        <br>
        <textarea v-model="message" class="message" rows="5" maxlength="72" />
        <br>    
        <p>{{ message }}</p>      
        <br>
        <button type="submit" :class="[message ? activeClass : '']">Let Show</button>
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
      tacos: "",
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
