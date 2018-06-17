<template>
    <section class="center">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <h1>02 : v-model</h1>
        <p>
            Creates a relationship between the data 
            in the instance/component 
            and a form input, so you can dynamically update values
        </p>
        <br>
        <h3>Type here: </h3>
        <br>
        <textarea v-model="message" class="message" rows="5" maxlength="72" />
        <br>    
        <p>{{ message }}</p>      
        <br>
        <hr>
         <br>
        <h3>Checkbox</h3>
         <br>
         <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john"> John</label>
        &nbsp;
        <input type="checkbox" id="paul" value="Paul" v-model="checkedNames">
        <label for="paul"> Paul</label>
        &nbsp;
        <input type="checkbox" id="george" value="George" v-model="checkedNames">
        <label for="george"> George</label>
        &nbsp;
        <input type="checkbox" id="ringo" value="Ringo" v-model="checkedNames">
        <label for="ringo"> Ringo</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        <br>
        <br>
        <hr>
        <br>
        <h3>Checkbox with v-for</h3>
        <br>
        <span v-for="(option,index) in options" :key="index">
            <input type="checkbox" :id="option.value" :value="option.value" v-model="checkedNames1">
            <label for="option.value">{{ option.value }}</label>&nbsp;
        </span>
        <br>
        <span>Check names: {{ checkedNames1 }}</span>
    </section>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a good place to type things",
      checkedNames: [],
      checkedNames1: [],
      options: [
        { value: "John1" },
        { value: "Paul1" },
        { value: "George1" },
        { value: "Ringo1" }
      ]
    };
  }
};
</script>

<style scoped>
.ulli {
  list-style-type: none;
}
</style>
