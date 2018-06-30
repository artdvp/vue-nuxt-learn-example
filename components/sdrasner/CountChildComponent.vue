<template>
    <div class="num">
        {{ count }}
    </div>
</template>

<script>
export default {
  name: "CountChild",
  props: {
    count: {
      type: Number,
      required: true
    }
  }
};
</script>
