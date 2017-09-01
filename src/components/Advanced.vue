<template>
  <div>
    <div>
      <h3>Mixins</h3>
      <h4>1. Basics</h4>
      <div>Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.</div>
      <h4>2. Option Merging</h4>
      <div>Options that expect object values, for example methods, components and directives, will be merged into the same object.</div>
      <h4>3. Global Mixin</h4>
      <div>You can also apply a mixin globally. Use with caution! Once you apply a mixin globally, it will affect every Vue instance created afterwards.</div>
      <h4>4. Custom Option Merge Strategies</h4>
      <div> If you want a custom option to be merged using custom logic, you need to attach a function to Vue.config.optionMergeStrategies</div>
      <img src="../img/mixin_option.png" />
    </div>
    <div>
      <h3>Custom Directives</h3>
      <h4>1. Example</h4>
      <div>When you want to access some low-level DOM, you can define custom directives.</div>
      <img src="../img/focus.png" />
      <div class="example">
        <input v-focus="{arg1: 'test', arg2: 'test2'}" placeholder="global focus" />
        <input v-another-focus placeholder="local focus" />
      </div>
      <h4>2. Hook Functions</h4>
      <ul>
        <li>bind</li>
        <li>inserted</li>
        <li>update</li>
        <li>componentUpdated</li>
        <li>unbind</li>
      </ul>
      <h4>3. Directive Hook Arguments</h4>
      <ul>
        <li>el</li>
        <li>binding</li>
        <li>vnode</li>
        <li>oldVnode</li>
      </ul>
      <img src="../img/directive_note.png" />
    </div>
    <div>
      <h3>Filters</h3>
      <div>Vue.js allows you to define filters that can be used to apply common text formatting. </div>
      <img src="../img/filter.png" />
      <div class="example">
        <div>The number is: 12003</div>
        <div>After format is: <span>{{12003 | wanFormat}}</span></div>  
      </div> 
    </div>
    <div>
      <h3>Render Functions & JSX</h3>
      <h4>1. Basics</h4>
      <div>
        Vue recommends using templates to build your HTML in the vast majority of cases. <br/>
        There are situations however, where you really need the full programmatic power of JavaScript.<br/>
        That’s where you can use the render function, a closer-to-the-compiler alternative to templates.
      </div>
      <img src="../img/render_function.png" />
      <h4>2. The Virtual DOM</h4>
      <div>
        What's the virtual DOM is?<br/>
        “Virtual DOM” is what we call the entire tree of VNodes, built by a tree of Vue components.<br/>
        “virtual node” also 'vNode' is the node information description that describing what kind of node it should render on the page, including descriptions of any child nodes to Vue.<br/>
        The render function return the description which is returned by 'createElement' to Vue to render the page content.
      </div>
      <div>
        <span :style="{fontWeight: 'bold', color: '#42b983'}">Note:</span>
        All VNodes in the component tree must be unique. 
      </div>
      <img src="../img/render_single.png" />
      <h4>3. JSX</h4>
      <div>We can use JSX syntax in Vue which bring us back to a syntax that’s closer to templates by using babel plugin 'babel-plugin-transform-vue-jsx'</div>
      <img src="../img/render_jsx.png" />
    </div>
    <div>
      <h3>Plugins</h3>
      <div>
        Plugins usually add global-level functionality to Vue.<br/>
        There are typically several types of plugins you can write:
      </div>
      <ol>
        <li>Add some global methods or properties. e.g. vue-custom-element</li>
        <li>Add one or more global assets: directives/filters/transitions etc. e.g. vue-touch</li>
        <li>Add some component options by global mixin. e.g. vue-router</li>
        <li>Add some Vue instance methods by attaching them to Vue.prototype.</li>
        <li>A library that provides an API of its own, while at the same time injecting some combination of the above. e.g. vue-router</li>
      </ol>
      <img src="../img/plugin_custom.png" />
      <div>
        Use plugins by calling the Vue.use() global method: Vue.use(MyPlugin)<br/>
        You can optionally pass in some options: Vue.use(MyPlugin, { someOption: true })<br/>
      </div> 
    </div>
    <div>
      <h3>Single File Components</h3>
      <h4>1. Why we need single file component?</h4>
      <div>
        In some vue projects, we use 'Vue.component' to define global component. It works well in small project.
        <br/>In more complex projects however, or when your frontend is entirely driven by JavaScript, these disadvantages become apparent:
      </div>
      <ul>
        <li>Global definitions force unique names for every component</li>
        <li>String templates lack syntax highlighting and require ugly slashes for multiline HTML</li>
        <li>No CSS support means that while HTML and JavaScript are modularized into components, CSS is conspicuously left out</li>
        <li>No build step restricts us to HTML and ES5 JavaScript, rather than preprocessors like Pug (formerly Jade) and Babel</li>
      </ul>
      <div>All of these are solved by single-file components with a .vue extension, made possible with build tools such as Webpack or Browserify.</div>
      <h4>2. How we write single file component?</h4>
      <div>Please refer to the project code. Each file with extension '.vue' is a signle file component.</div>
      <h4>3. What About Separation of Concerns?</h4>
      <div>
        One important thing to note is that separation of concerns is not equal to separation of file types.<br/>
        Inside a component, its template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
// define a mixin object
document.title = 'Advanced'
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
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})
Vue.directive('focus', {
  inserted: function (el, binding) {
    el.focus()
    console.log('binding.value.arg1=', binding.value.arg1)
    console.log('binding.value.arg2=', binding.value.arg2)
  }
})
export default {
  name: 'advanced',
  mixins: [myMixin],
  created: function () {
    console.log('component hook called')
  },
  myOption: 'my hello!',
  directives: {
    anotherFocus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  filters: {
    wanFormat: function (value) {
      if (value && Number(value)) {
        return (value / 10000).toFixed(2) + '万'
      } else {
        return 0
      }
    }
  }
}
</script>
