<template>
    <div class="black">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.black .label {
  fill: black;
}

.black .bottle,
.black .wine-text {
  fill: white;
}

.black .flor {
  fill: #ccc;
}

.black .bkimg {
  filter: url(#inverse);
}
</style>
