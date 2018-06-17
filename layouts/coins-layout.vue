<template>
    <div class="container">
        <ul class="menu">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
        </ul>
        <nuxt/>
    </div>
</template>

<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  width: 75%;
  margin: 100px auto;
  text-align: center;
}
.menu {
  list-style: none;
  margin-bottom: 0px;
}
.menu li {
  display: inline;
}
.menu li a {
  padding: 20px;
  text-decoration: none;
}
</style>
