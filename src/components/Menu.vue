<template>
  <ul id="menu" class="menu-wrap col-md-2">
    <router-link tag="li" to="/"><a>Introduction</a></router-link>
    <router-link tag="li" to="syntax"><a>{{syntax}}</a></router-link>
    <router-link tag="li" to="links"><a>Links</a></router-link>
    <router-link tag="li" :to="framework"><a>Framework</a></router-link>
  </ul>
</template>

<script>
export default {
  name: 'menu',
  props: ['syntax'],
  data () {
    return {
      framework: 'framework'
    }
  }
}
</script>

<style lang="less">
@import url('../style/menu.less');
</style>
