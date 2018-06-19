<template>
    <section class="center">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <br>
        <h1>11 : COMPUTED</h1>
        <p>
         Computed properties are calculations that will be cached and will only update when needed.
        <br>
        Highly performant but use with understanding.
        <br>
        <br>
        </p>
        <h3>Yout Name : </h3>
        <input type="text" v-model.lazy="userData"/>
        <br>
        <h3 v-if="userData">Initial entry: {{ userData }}</h3>
        <h2 v-if="userData">Computed Value: {{ greeting }}</h2>
        <br>
        <h2>Computed vs Methods</h2><br>
        <h3>Computed</h3>
        <br>
        <p>
            <ul class="none-style">
                <li v-for="(option,index) in optionComputed" :key="index">
                    {{ option }}
                </li>
            </ul>
        </p><br>
        <h3>Methods</h3>
        <br>
        <p>
            <ul class="none-style">
                <li v-for="(option,index) in optionMethods" :key="index">
                    {{ option }}
                </li>
            </ul>
        </p>
    </section>
</template>

<script>
export default {
  data() {
    return {
      userData: "",
      optionComputed: [
        "1. Run only when a dependency has changed",
        "2. Cached",
        "3. Should be used as a property, in place of data",
        "4. By default getter only, but you can define a setter"
      ],
      optionMethods: [
        "1. Run whenever an update occurs",
        "2. Not cached",
        "3. Typically invoked from v-no/@, but flexible",
        "4. Getter/setter"
      ]
    };
  },
  computed: {
    greeting() {
      return `You're a monster, ${this.userData}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.none-style {
  list-style-type: none;
}
</style>

