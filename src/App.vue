<template>
  <div id="app">
    <div class="clearfix header">
      <img class="logo" src="./img/logo.png">
      <span class="slogan">Vue.js</span>
    </div>
    <div class="content">
      <CustomMenu></CustomMenu>
      <router-view class="page col-md-10 col-md-offset-2"></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  components: {
    CustomMenu: Menu
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
#app {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
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
  font-size: 3rem;
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: solid 1px #ebebeb;
  z-index: 1;
}
.content {
  margin-top: 80px;
}
.page {
  padding: 30px;
}
</style>
