<template>
  <ul id="menu" class="menu-wrap col-md-3">
    <router-link tag="li" to="/"><a>Introduction</a></router-link>
    <router-link tag="li" to="syntax"><a>{{syntax}}</a></router-link>
    <router-link tag="li" to="transitions"><a>Transitions & Animation</a></router-link>
    <router-link tag="li" to="advanced"><a>Advanced</a></router-link>
    <router-link tag="li" to="comparison"><a>Framwork Comparison</a></router-link>
    <router-link tag="li" :to="build"><a>Build</a></router-link>
    <router-link tag="li" :to="{name: 'refferLinks'}"><a>Links</a></router-link>
  </ul>
</template>

<script>
export default {
  // props: ['syntax'],
  props: {
    syntax: {
      required: true,
      validator: function (value) {
        return value.length > 10
      }
    }
  },
  data () {
    return {
      build: 'build'
    }
  },
  created: function () {
    console.log('test')
  }
}
</script>

<style lang="less">
@import url('../style/menu.less');
</style>
