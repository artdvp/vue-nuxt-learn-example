<template>
    <section class="center">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <h1>03 : Modifiers</h1>
        <p>
            <b>v-model.trim</b> : will strip any leading or trailing whitespace 
            from the bound string
            <br>
            <b>v-model.number</b> : changes strings to number inputs
            <br>
            <b>v-model.lazy</b> : won't populate then content automatically, it will wait to bind until an event happens.(it listens to change events instead of input)
        </p>
        <br>
        <h3>Type here: lazy </h3>
        <br>
        <textarea v-model.lazy="message" class="message" rows="5" maxlength="72" />
        <br>    
        <p>{{ message }}</p>      
        <br>
        <hr>
         <br>
        <h3>Type here: trim </h3>
        <br>
        <textarea v-model.trim="message" class="message" rows="5" maxlength="72" />
        <br>    
        <p>{{ message }}</p>      
        <br>
        <hr>
        <h3>Type here: number </h3>
        <br>
        <input v-model.number="num" rows="5" maxlength="72" />
        <br>    
        <p>{{ num }}</p>      
        <br>
        <hr>
         
    </section>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a good place to type things",
      num: 0
    };
  }
};
</script>

<style scoped>
</style>
