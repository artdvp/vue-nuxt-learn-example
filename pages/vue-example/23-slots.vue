<template>
    <section class="center fflex">
        <nuxt-link to="/vue-example">Back</nuxt-link>
        <br>
        <br>
        <h1>23 : Slots</h1>
        <div class="app">
            <h2>We can use slots to populate content</h2>
            <slot1>
                <h3>This is slot number one</h3>
            </slot1>
            <slot1>
                <h3>This is slot number two</h3>
                <small>I can put more info in, too!</small>
            </slot1>
        </div>
    </section>
</template>

<script>
import slot1 from '@/components/sdrasner/Slots1'

export default {
    components: {
        slot1
    }
}
</script>

<style lang="scss" scoped>
.fflex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: black;
  color: white;
  height: 100vh;
}

.app {
  text-align: center;
  margin: 60px;
  max-width: 320px;
  margin: 0 auto;
  display: table;
}

</style>
