<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example/">Back</nuxt-link>
        <br>
        <br>
        <h1>21 : Components - 2</h1>
        <div class="app">
            <h3>
                <button @click="increment">+</button>
                Adjust the data
                <button @click="decrement">-</button>
            </h3>
            <br>
            <h2>This is the app data: <span class="num">{{ count }}</span></h2>
            <br>
            <hr>
            <br>
            <h4>
                <count-child count="1"></count-child>
            </h4>
            <br>
            <p>
                This is a child counter that is using a static integer as props
            </p>
            <br>
            <hr><br>
            <h4>
                <count-child :count="count"></count-child>
            </h4>
            <p>This is the same child counter and it is using the vue instance data as props</p>
        </div>
    </section>
</template>

<script>
import CountChild from "@/components/sdrasner/CountChildComponent";
export default {
  components: {
    CountChild
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
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
  height: 100vh;
}
.none-style {
  list-style-type: none;
}
.paContent {
  width: 40%;
}

.app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  margin: 0 auto;
  display: table;
}

.num {
  color: #af007e;
}

h4 {
  margin-bottom: 0;
}

button {
  color: #051923;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

hr {
  border-color: #f2faff;
  opacity: 0.5;
}
</style>

