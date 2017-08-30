<template>
  <div>
    <div>
      <h3>Mixins</h3>
      <h4>1. Basics</h4>
      <div>Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.</div>
      <h4>2. Option Merging</h4>
      <div>Options that expect object values, for example methods, components and directives, will be merged into the same object.</div>
      <h4>3. GlobalMixin</h4>
      <div>You can also apply a mixin globally. Use with caution! Once you apply a mixin globally, it will affect every Vue instance created afterwards.</div>
      <h4>4. Custom Option Merge Strategies</h4>
      <div> If you want a custom option to be merged using custom logic, you need to attach a function to Vue.config.optionMergeStrategies</div>
      <img src="../img/mixin_option.png" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
// define a mixin object
document.title = 'Composition'
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
Vue.mixin({
  name: 'composition',
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})
export default {
  mixins: [myMixin],
  created: function () {
    console.log('component hook called')
  },
  myOption: 'hello!'
}
</script>
