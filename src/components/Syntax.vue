<template>
  <div class="syntax">
    <div>
      <div>
        <h3>Template Syntax</h3>
        <img src="../img/template_bind.png">
      </div>
      <div>
        <h3>Computed Properties</h3>
        <div>
          Computed properites will only excute when the related property has changed. <br/>
          Method properites will always excute when the DOM refresh.
        </div>
        <img src="../img/computed.png">
        <img src="../img/computed_1.png">
      </div>
      <div>
        <h3>CSS and style binding</h3>
        <h4>1. Binding html class</h4>
        <img src="../img/css_style_1.png">
        <h4>2. Binding inline styles</h4>
        <img src="../img/css_style_2.png">
      </div>
      <div>
        <h3>Conditional Rendering</h3>
        <h4>1. v-if</h4>
        <img src="../img/if_condition.png">
        <h5>When used in template, it can control mutiple elements just like 'block' in wx app. </h5>
        <img src="../img/if_condition_1.png">
        <h5><span :style="noteColor">Note:</span> Vue tries to render elements as efficiently as possible, often re-using them instead of rendering from scratch.
          This make Vue very fast.<br/>
          If you don't want to re-use element, just add a key attribute with unique values.
         </h5>
        <h4>2. v-show</h4>
        <h1 v-show="true">{{vShowContent}}</h1>
        <div>The difference between v-if is that an element with v-show will always be rendered and remain in the DOM; v-show simply toggles the display CSS property of the element.</div>
        <h5><span :style="noteColor">Note:</span>Note that v-show doesn’t support the 'template' syntax, nor does it work with v-else.</h5>
      </div>
      <div>
        <h3>List rendering</h3>
        <h4>1. Basic usage</h4>
        <img src="../img/for.png">
        <h5><span :style="noteColor">Note:</span>Inside v-for blocks we have full access to parent scope properties.</h5>
        <h4>2. Other usage</h4>
        <img src="../img/for_1.png">
        <h4>3. v-for and v-ifr</h4>
        <div>When they exist on the same node, v-for has a higher priority than v-if</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'syntax',
    data () {
      return {
        vShowContent: "<h1 v-show='true'></h1>",
        noteColor: {
          color: '#42b983',
          fontWeight: 'bold'
        }
      }
    }
  }
</script>

<style lang="less">
  .syntax {
    >div >div {
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
    }
  }
</style>

