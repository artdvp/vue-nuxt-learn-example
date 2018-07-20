<template>
  <div>
    <button @click="hightincrease">
      Increase height
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 3
    };
  },
  methods: {
    hightincrease: function() {
      this.count += 1;
      this.$emit("heightincrease");
    }
  }
};
</script>
