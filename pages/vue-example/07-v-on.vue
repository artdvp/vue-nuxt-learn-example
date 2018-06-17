<template>
    <section class="center">
        <router-link to="/vue-example/">Back</router-link>
        <br>
        <br>
        <h1>07 : V-ON and @</h1>
        <p>
        Extremely useful so there's shortcut! v-on is great for binding to event like click and mouseenter. You're able to pass in a parameter for the event like (e)
        <br>
        We can also use ternaries directly
        <br>
        <br>
        <b>Multiple Bindings</b>
        <br>
        v-on="click : onClicl", keyup : onKeyup, keydown : onKeydown"<br>
        @="click : onClicl", keyup : onKeyup, keydown : onKeydown"
        <br>
        <br>
        <b>Modifiers</b>
        <br>
        <b>@mousemove.stop</b> : is comparable to e.stopPropogation()
        <br> 
        <b>@mousemove.prevent</b> : this is like e.preventDefault()
        <br>
        <b>@submit.prevent</b> : this will no longer reload the page on submitssion
        <br>
        <b>@click.once</b> : not to be confused with v-once, this click event will be triggerd once.
        <br>
        <b>@click.native</b> : so that you can listen to native events in the DOM
        <br>
        </p>

        <br>
        <h3>V-ON</h3>
        <br>
        <div class="center flex-center">
        <div class="item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg" width="235" height="300"/>
        <div class="quantity">
            <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
            <span class="quant-text">Quantity: {{ counter }}</span>
            <button class="inc" @click="counter += 1">+</button>
            </div>
            <button class="submit">Submit</button>
        </div>
        </div>
        <br>
        <br>
        <hr>
        <br>
  
    </section>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.special {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

h2,
h3,
li {
  @extend .special;
}

li {
  list-style: none;
  display: inline-block;
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
  height: 400px;
  justify-content: space-around;
  background: #eee;
  //   padding: 20px 10px;

  margin: 30px;
  img {
    align-self: center;
  }
}
</style>

