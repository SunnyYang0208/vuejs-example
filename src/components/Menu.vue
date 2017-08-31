<template>
  <ul id="menu" class="menu-wrap col-md-3">
    <router-link tag="li" to="/"><a>Introduction</a></router-link>
    <router-link tag="li" to="syntax"><a>{{syntax}}</a></router-link>
    <router-link tag="li" to="transitions"><a>Transitions & Animation</a></router-link>
    <router-link tag="li" to="advanced"><a>Advanced</a></router-link>
    <router-link tag="li" to="comparison"><a>Framwork Comparison</a></router-link>
    <router-link tag="li" :to="build"><a>Build</a></router-link>
    <router-link tag="li" to="links"><a>Links</a></router-link>
  </ul>
</template>

<script>
export default {
  name: 'menu',
  props: ['syntax'],
  data () {
    return {
      build: 'framework'
    }
  }
}
</script>

<style lang="less">
@import url('../style/menu.less');
</style>
