<template>
  <div id="app">
    <div class="clearfix">
      <img class="logo" src="./assets/logo.png">
      <span class="slogan">Vue.js</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app .logo {
  width: 60px;
  float: left;
  margin: 10px 10px 0 0;
}
#app .slogan {
  line-height: 80px;
  font-size: 40px;
  float: left;
}
div a.navigator-arrow {
  position: absolute;
  top: 50%;
  font-size: 5rem;
  color: #888888;
  cursor: pointer;
}
.navigator-arrow:hover {
  color: #42b983;
  text-decoration: none;
}
.navigator-arrow.glyphicon-chevron-left {
  left: 10px;
}
.navigator-arrow.glyphicon-chevron-right {
  right: 10px;
}
</style>
