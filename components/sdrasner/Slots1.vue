<template>
    <div class="child">
        <slot></slot>
        <p>It's a veritable slot machine! Ha ha aw</p>
    </div>
</template>

<style lang="scss" scoped>
.child {
  border: 1px solid #c62735;
  border-radius: 4px;
  padding: 3px;
  margin: 7px;
  background: #f7eff0;
  opacity: 0.8;
  color:black;
}

button {
  font-family: 'Bitter';
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

hr {
  border-color: #F2FAFF;
  opacity: 0.5;
  margin: 15px 0;
}
</style>
