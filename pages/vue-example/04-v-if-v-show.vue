<template>
    <section class="center">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <h1>04 : V-IF/V-SHOW</h1>
        <p>
           Is a conditional that will display information depending on meeting a requierment. This can be anything- buttons, forms, divs, components 
        </p>
        <br>
        <h3>Type here : v-show </h3>
        <br>
        <textarea v-model="message" class="message" rows="5" maxlength="72" />
        <br>    
        <p>{{ message }}</p>      
        <br>
        <button type="submit" v-show="message">Let Show</button>
        <br>
         <hr>
         <br>
        <h1>V-IF/V-ELSE</h1>
        <p>
           Pretty straightforward- you can conditionally render one thing or another. There's also v-else-if
        </p>
        <br>
         <h3>Do you like tacos?</h3>
         <br>
        <input type="radio" id="yes" value="yes" v-model="tacos">
        <label for="no"> yes</label>
        <br>
        <input type="radio" id="no" value="no" v-model="tacos">
        <label for="no"> no</label>
        <br>
        <br>
         <div v-if="tacos">
            <p v-if="tacos === 'yes'" class="thumbs">👍</p>
            <p v-else>you're a monster</p>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      num: 0,
      tacos: ""
    };
  }
};
</script>

<style scoped>
</style>
