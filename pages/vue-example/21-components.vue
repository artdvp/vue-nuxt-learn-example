<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>21 : Components</h1>
        <p class="paContent">
        <br>
         A collection of elements that are encapsulated into a group that can be accessed through one single element.
        <br><br>
        <hello></hello>
        </p>
        <br>
        <h1>Props</h1>
        <p class="paContent">
        <br>
         Passing data down from the parent to the child
         <br>
         <br>
         props: ['text']
         <br><br>
         Props are intended for one way commounication
         <br><br>
         You can think of it a little like the component holds a variable that is waiting to be filled out by whatever the parent sends down to it.
        </p>
        <br>
        <h1>Props : Types &amp; Validation</h1>
        <p class="">
        <br>
         <v-pre>
props: {
    text: [String, Number]
}
         </v-pre>
         <br><br>
        <a href="https://gyazo.com/94e57e2083f5b7b6c6e32b6e33661b55"><img src="https://i.gyazo.com/94e57e2083f5b7b6c6e32b6e33661b55.png" alt="https://gyazo.com/94e57e2083f5b7b6c6e32b6e33661b55" width="463"/></a>
        <br><br>
        You don't need to necessarily pass the data in props to the child, either, you have the option of using vue instance data or a static value as you see fit:
        </p>
        <br>
        
        <hello-prop :text="message"></hello-prop>
    </section>
</template>

<script>
import Hello from "@/components/sdrasner/HelloComponent";
import HelloProp from "@/components/sdrasner/HelloPropsComponent";

export default {
  components: {
    Hello,
    HelloProp
  },
  data() {
    return {
      message: "Hello Artdvp"
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

