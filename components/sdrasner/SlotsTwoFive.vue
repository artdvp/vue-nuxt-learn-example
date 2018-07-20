<template>
    <div class="white">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.white .label {
  fill: white;
}

.white .bottle,
.white .wine-text {
  fill: black;
}

.white .flor {
  fill: #444;
}
</style>
