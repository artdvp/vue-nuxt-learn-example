<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>13 : WATCHERS</h1>
        <p class="paContent">
        <br>
         &amp; Vue's Reactivity System
        <br>
        <br>
        <b>WHAT IS REACTIVE?</b><br>
        <br>
        Reactive programming is programming with asynchronous data streams.
        <br>
        <br>
        A stream is a sequence of ongoing events ordered in time that offer some hooks with which to observe it.
        <br><br>
        When we use reactive premises for building applications, this means it's very easy to update state in reaction to events.
        <br><br>
        Vue takes the object, walks through its properties and converts them to getter/setters
        <br>
        <br>
        The Vue instance is the middleman between the DOM and the business logic
        <br><br>
        Watch updates the DOM only if it's required- performing calculations in JS is really performant but accessing the DOM is not. So we have a Virtual DOM which is like a copy, but parsed in JavaScript
        <br><br>
        It will only update the DOM for things that need to be changed, which is faster.
        <br><br>
        Good for asynchronous updates,and updates/transitions with data changes
        <br><br>
        </p>
        <br>
       
    </section>
</template>

<script>
export default {
  data() {
    return {};
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

