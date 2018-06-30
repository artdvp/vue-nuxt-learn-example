<template>
    <div>
        <p>{{ text }}</p><br>
        <button @click="talkToMe">Let's talk</button>
    </div>
</template>

<script>
export default {
  name: "CommunicatingChild1",
  props: ["text"],
  methods: {
    talkToMe() {
      this.$emit("changetext", "forget introductions, I want a taco 2");
    }
  }
};
</script>
