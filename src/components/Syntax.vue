<template>
  <div class="syntax">
    <div>
      <div>
        <h3>Template Syntax</h3>
        <img src="../img/template_bind.png">
      </div>
      <div>
        <h3>Vue options</h3>
        <img src="../img/vue_options.png">
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
        <h1 v-show="false">{{vShowContent}}</h1>
        <div>The difference between v-if is that an element with v-show will always be rendered and remain in the DOM; v-show simply toggles the display CSS property of the element.</div>
        <h5><span :style="noteColor">Note:</span>Note that v-show doesn’t support the 'template' syntax, nor does it work with v-else.</h5>
      </div>
      <div>
        <h3>List rendering</h3>
        <ul>
          <li v-for="n in 10" v-if="n == 2" :key="n">{{n}}</li>  
        </ul>
        <h4>1. Basic usage</h4>
        <img src="../img/for.png">
        <h5><span :style="noteColor">Note:</span>Inside v-for blocks we have full access to parent scope properties.</h5>
        <h4>2. Other usage</h4>
        <img src="../img/for_1.png">
        <h4>3. v-for and v-if</h4>
        <div>When they exist on the same node, v-for has a higher priority than v-if.</div>
        <h4>4. key</h4>
        <div>When Vue is updating a list of elements rendered with v-for, it by default uses an “in-place patch” strategy.</div>
        <div>Example:</div>
        <ul class="key-example-list">
          <li v-for="item in items" :key="item.key">{{item.value}}</li>
        </ul>
        <button @click="changeOrder">Change item order</button>
      </div>
      <div>
        <h3>Event handling</h3>
        <h4>1. Basic usage</h4>
        <div>
          We can use the v-on directive to listen to DOM events and run some JavaScript when they’re triggered.<br/>
          The JavaScript can be statement, method name or method call.
        </div>
        <img src="../img/event.png">
        <h4>2. Event Modifiers</h4>
        <img src="../img/event_modifier.png">
        <h4>3. Key Modifiers</h4>
        <img src="../img/key_modifier.png">
        <h4>4.Mouse Button Modifiers</h4>
        <img src="../img/mouse_btn_modifier.png">
      </div>
      <div>
        <h3>Form Input Bindings</h3>
        <div>
          You can use the v-model directive to create two-way data bindings on form input and textarea elements.<br/>
          It automatically picks the correct way to update the element based on the input type.
        </div>
        <img src="../img/v_modal.png">
      </div>
      <div>
        <h3>Components</h3>
        <div>
          Components help you extend basic HTML elements to encapsulate reusable code.
        </div>
        <h4>1. Registration</h4>
        <img src="../img/component_1.png">
        <div>Result is:</div>
        <my-component></my-component>
        <my-component-2></my-component-2>
        <template is="my-component-2"></template>
        <h4>2. DOM Template Parsing Caveats</h4>
        <div>Some elements such as <span :style="{color: 'red'}">ul</span>, 
          <span :style="{color: 'red'}">ol</span>, 
          <span :style="{color: 'red'}">table</span> and 
          <span :style="{color: 'red'}">select</span> 
          have restrictions on what elements can appear inside them, 
          and some elements such as <span :style="{color: 'red'}">option</span> 
          can only appear inside certain other elements.
        </div>
        <div>We can use the is special attribute to solve this issue</div>
        <img src="../img/is_usage.png">
        <table>
          <my-component></my-component>
          <my-component-2></my-component-2>
          <test></test>
          <!-- <anchored-heading :level="1"></anchored-heading> -->
        </table>
        <div>
          <span :style="noteColor">Note:</span>It should be noted that these limitations do not apply if you are using string templates from one of the following sources:
        </div>
        <img src="../img/component_string.png"/>
        <h4>3. Data</h4>
        <div>Most of the options that can be passed into the Vue constructor can be used in a component, with one special case: data must be function.</div>
        <h4>4. Props</h4>
        <div>
          A prop is a custom attribute for passing information from parent components.
          A child component needs to explicitly declare the props it expects to receive using the props option. 
        </div>
        <img src="../img/props.png" />
        <img src="../img/props_1.png" />
        <h4>5. Slots</h4>
        <div> Vue.js implements a content distribution API that is modeled after the current Web Components spec draft, using the special <span :style="noteColor">slot</span> element to serve as distribution outlets for the original content.</div>
        <h4> 1) Single Slot</h4>
        <img src="../img/slot_single.png" />
        <h4>Result:</h4>
        <div>
          <h5>Parent title</h5>
          <single-slot-child></single-slot-child>
          <single-slot-child>Parent content</single-slot-child>
        </div>
        <h4> 2) Named Slot</h4>
        <img src="../img/slot_named.png" />
        <h4>Result:</h4>
        <div>
          <app-layout>
            <h4 slot="header">Here might be a page title</h4>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
            <p slot="footer">Here's some contact info</p>
          </app-layout>
        </div>
        <h4> 3) Scoped Slot</h4>
        <div>A scoped slot is a special type of slot that functions as a reusable template (that can be passed data to) instead of already-rendered-elements.</div>
        <img src="../img/slot_scoped.png" />
        <div>A more typical use case for scoped slots would be a list component that allows the component consumer to customize how each item in the list should be rendered</div>
        <img src="../img/slot_scoped_list.png" />
        <h4>Result:</h4>
        <div>
          <slot-list :items="items">
            <template slot="item" scope="props">
              <li class="my-fancy-item">
                <div>parent1 defined content</div>
                {{ props.text }}
              </li>
            </template>
          </slot-list>
          <component :is="currentView" :items="items">
            <template slot="item" scope="props">
              <li class="my-fancy-item">
                parent2 defined content
                {{ props.text }}
              </li>
            </template>
          </component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  document.title = 'Syntax'
  // import Vue from 'vue'
  import Test from '@/components/Test.vue'
  var Child = {
    template: '<div>A custom component2 in syntax.vue !</div>'
  }
  var singleSlotChild = {
    template: '<div><h5>Child title</h5><slot><h4>This will only be displayed if there is no content to be distributed.</h4></slot></div>'
  }
  var AppLayout = {
    template: '<div class="container"><header><slot name="header"></slot></header><main><slot></slot></main><footer><slot name="footer"></slot></footer></div>'
  }
  var SlotList = {
    template: '<ul><slot name="item" v-for="item in items" :text="item.value"><!-- fallback content here --></slot></ul>',
    props: ['items']
  }
  // Vue.component('anchored-heading', {
  //   template: '#anchored-heading-template',
  //   props: {
  //     level: {
  //       type: Number,
  //       required: true
  //     }
  //   }
  // })
  export default {
    name: 'syntax',
    data () {
      return {
        show: false,
        vShowContent: "<h1 v-show='true'></h1>",
        currentView: 'SlotList',
        noteColor: {
          color: '#42b983',
          fontWeight: 'bold'
        },
        items: [
          {
            key: 'item1',
            value: 'test1'
          },
          {
            key: 'item2',
            value: 'test2'
          },
          {
            key: 'item3',
            value: 'test3'
          }
        ]
      }
    },
    components: {
      'my-component-2': Child,
      'single-slot-child': singleSlotChild,
      AppLayout: AppLayout,
      SlotList: SlotList,
      test: Test
    },
    methods: {
      changeOrder: function () {
        this.items = [
          {
            key: 'item3',
            value: 'test3'
          },
          {
            key: 'item1',
            value: 'test1'
          },
          {
            key: 'item2',
            value: 'test2'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
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
      h4 {
        margin-top: 20px;
      }
      > div {
        line-height: 25px;
      }
    }
    .key-example-list {
      margin: 0;
      padding: 0;
      display: block;
      li {
        display: block;
        padding: 0;
        margin: 0;
      }
    }
    .test {
      background-color: #ddd;
    }
  }
</style>

