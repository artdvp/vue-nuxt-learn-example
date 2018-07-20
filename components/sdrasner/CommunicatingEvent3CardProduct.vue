<template>
    <div class="item">
        <h2>{{ item }}</h2>
        <img :src="url" width="235" height="300">
        <div class="quantity">
            <button class="inc" @click="counter > 0 ? counter -= 1: 0">-</button>
            <span class="quant-text">Quantity: {{ counter }}</span>
            <button class="inc" @click="counter += 1">+</button>
        </div>
        <button class="submit">Submit</button>
    </div>
</template>

<script>
export default {
  //props: ['item', 'counter', 'url']
  props: ['item', 'url'],
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style lang="scss" scoped>

.special {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

h1, h2, h3, li {
  @extend .special;
}

h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
  color: black;
}

input {
  background: #eee;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
  &.inc {
    background: white;
    color: black;
  }
  &.submit {
    background: black;
    color: white;
    @extend .special;
    margin-left: 20px;
    padding: 12px 14px;
    width: 240px;
    transition: 0.25s all ease-in;
    &:hover {
      opacity: 0.8;
      transition: 0.25s all ease-out;
    }
  }
}

.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
  color: black;
  @extend .special;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 440px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
  img {
    align-self: center;
  }
}
</style>
