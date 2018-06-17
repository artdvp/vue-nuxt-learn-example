<template>
    <section class="app center" :style="{backgroundColor: `hsl(${x}, 80%, 50%)`}" @mousemove="xCoordinate">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <br>
        <h1>10 : Methods</h1>
        <p>
         Are bound to the Vue instance, they are incredily useful for functions you would like to access in directives
        <br>
        <br>
        </p>
        <h3> Methods </h3>
        <p>
            <button @click="decrement">-</button>
            {{ counter }}
            <button @click="increment">+</button>
        </p>
        <p>Pixels across {{ x }}</p>
        <br>
        <br>
        <br>
        <br>
        <section class="sec2">
            <div class="app2">
            <form @submit.prevent="submitForm" class="f-form">
            <div>
            <label for="name">Name:</label><br>
            <input id="name" type="text" v-model="name" required/>
            </div>
            <div>
            <label for="email">Email:</label><br>
            <input id="email" type="email" v-model="email" required/>
            </div>
            <div>
            <label for="caps">HOW DO I TURN OFF CAPS LOCK:</label><br>
            <textarea id="caps" v-model="caps" required></textarea>
            </div>
            <button class="f-button" :class="[name ? activeClass : '']" type="submit">Submit</button>
            <div>
            <h3>Response from server:</h3>
            <pre>{{ response }}</pre>
            </div>
        </form>
        </div>
        </section>
    </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      counter: 0,
      x: 0,
      userID: 1,
      name: "",
      email: "",
      caps: "",
      response: "",
      activeClass: "active"
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    },
    async submitForm() {
      try {
        let { data } = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            userID: this.userID,
            name: this.name,
            email: this.email,
            caps: this.caps
          }
        );
        if (data) {
          this.response = JSON.stringify(data, null, 2);
        }
      } catch (e) {
        this.response = "Error: " + e.response.status;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  padding: 15vmin;
  font-size: 30px;
  transition: 0.2s background-color ease;
}

$primary: #5968d7;

.sec2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
}

.f-form {
  width: 300px;
  padding: 10px 40px;
  label {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.03em;
    font-weight: bold;
  }
  input,
  textarea {
    border: 1px solid #ccc;
    color: #333;
    width: calc(100% - 30px);
  }
  input,
  textarea,
  button {
    border-radius: 4px;
    padding: 8px 15px;
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
  }
  div {
    margin: 20px 0;
  }
}

.f-button {
  color: white;
  border: none;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #ccc;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
  &:hover {
    transform: translateY(2px);
  }
}

.active {
  background: $primary;
}

pre-content {
  width: 300px;
}
</style>

