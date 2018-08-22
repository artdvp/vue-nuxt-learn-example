<template>
  <div>
      <button @click="radiusincrease">Increase radius</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            countR: 0
        }
    },
    methods: {
        radiusincrease: function(){
            this.countR += 3
            this.$emit('radiusincrease')
        }
    }
};
</script>

<style scoped>
</style>
