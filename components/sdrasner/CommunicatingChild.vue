<template>
    <div>
        <p>{{ text }}</p><br>
        <button @click="talkToMe">Let's talk</button>
    </div>
</template>

<script>
export default {
  name: "CommunicatingChild",
  props: ["text"],
  methods: {
    talkToMe() {
      this.text = "forget introductionsm I want a taco";
    }
  }
};
</script>
