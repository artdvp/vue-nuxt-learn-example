<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
  name: "HelloProp",
  props: {
    text: {
      type: String,
      required: true,
      default: "Hello world"
    }
  }
};
</script>
