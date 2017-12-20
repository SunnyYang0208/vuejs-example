<template>
  <div id="appEnter">
    <div class="clearfix header">
      <img class="logo" src="./img/logo.png">
      <span class="slogan">Vue.js</span>
    </div>
    <div class="content">
      <CustomMenu syntax="Basic Syntax"></CustomMenu><!-- recommend to use custome-menu -->
      <router-view class="page col-md-9 col-md-offset-3"></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CustomMenu from './components/CustomMenu.vue'
  var MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. add global method or property
    Vue.myGlobalMethod = function () {
      // something logic ...
      alert('myPlugin')
    }
    // 2. add a global asset
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // something logic ...
      }
    })
    // 3. inject some component options
    Vue.mixin({
      created: function () {
        // something logic ...
      }
    })
    // 4. add an instance method
    Vue.prototype.$myMethod = function (methodOptions) {
      // something logic ...
    }
  }
  Vue.use(MyPlugin)
  Vue.mixin({
    created: function () {
      console.log('I am in APP.vue mixin.')
    }
  })
  Vue.filter('percentFormat', function (value) {
    if (value && Number(value)) {
      return (value * 100).toFixed(2) + '%'
    } else {
      return 0
    }
  })
  Vue.myGlobalMethod()
  export default {
    name: 'app',
    components: {
      CustomMenu: CustomMenu
    }
  }
</script>

<style lang="less">
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');
  body {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
  }
  #appEnter {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #appEnter .logo {
    width: 60px;
    float: left;
    margin: 10px 10px 0 0;
  }
  #appEnter .slogan {
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
  .page > div {
    margin-bottom: 40px;
    h3 {
      color: #333;
      position: relative;
      margin-left: 16px;
      &:after {
        content: "#";
        color: #42b983;
        position: absolute;
        left: -0.7em;
        bottom: -2px;
        font-size: 1em;
        font-weight: bold;
      }
    }
    h4 {
      margin-top: 20px;
    }
    > div {
      line-height: 25px;
    }
    .example {
      padding: 20px;
      border: solid 1px #ddd;
      overflow-x: auto;
      margin-top: 10px;
      ul {
        padding-left: 0;
      }
    }
  }
</style>
