<template>
  <div class="transition">
    <div>
      <div>
        <h3>Enter/Leave & List Transitions</h3>
        <div>
          Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:<br/>
          1) automatically apply classes for CSS transitions and animations<br/>
          2) integrate 3rd-party CSS animation libraries, such as Animate.css<br/>
          3) use JavaScript to directly manipulate the DOM during transition hooks<br/>
          4) integrate 3rd-party JavaScript animation libraries, such as Velocity.js<br/>
        </div>
        <h4 class="green">Transitioning Single Elements/Components</h4>
        <div>Vue provides a transition wrapper component, allowing you to add entering/leaving transitions for any element or component in the following contexts:</div>
        <div>
          1) Conditional rendering (using v-if)<br/>
          2) Conditional display (using v-show)<br/>
          3) Dynamic components<br/>
          4) Component root nodes<br/>
        </div>
        <h4> 1. Example: css transition</h4>
        <img src="../img/transition_1.png">
        <div id="example-1" class="example">
          <button v-on:click="show = !show">
            Toggle
          </button>
          <transition name="fade" :duration="{ enter: 5000, leave: 800 }">
            <p v-if="show">hello</p>
          </transition>
        </div>
        <h4>2. Transition Class</h4>
        <div>There are six classes applied for enter/leave transitions.</div>
        <ul>
          <li>v-enter</li>
          <li>v-enter-active</li>
          <li>v-enter-to</li>
          <li>v-leave</li>
          <li>v-leave-active</li>
          <li>v-leave-to</li>
        </ul>
        <div>
          'v' is the default prefix if the transition element has no name.<br/>
          If you use transition name as 'my-transition' for example, then the v-enter class would instead be my-transition-enter.
        </div>
        <h4>3. Animations</h4>
        <div>CSS animations are applied in the same way as CSS transitions, the difference being that v-enter is not removed immediately after the element is inserted, but on an animationend event.</div>
        <img src="../img/animation_1.png">
        <div id="example-2" class="example">
          <button @click="show2 = !show2">Toggle show</button>
          <transition name="bounce">
            <p v-if="show2">Look at me!</p>
          </transition>
        </div>
        <h4>4. JavaScript Hooks</h4>
        <div>Vue also supply some JavaScript hooks to handle transition. You can use them like blow:</div>
        <img src="../img/transition_2.png" >
        <h4>5. Transitioning Between Elements</h4>
        <div>Vue also supply some JavaScript hooks to handle transition. You can use them like blow:</div>
        <img src="../img/transition_mutiple_element.png" >
        <h4>5. Transitioning Between Components</h4>
        <div>Transitioning between components is even simpler - we don’t even need the key attribute. Instead, we just wrap a dynamic component:</div>
        <img src="../img/transition_mutiple_component.png" >
        <div class="example">
          <button @click="changeView">change view</button>
          <button @click="changeMode">change mode</button>
          <span>{{mode}}</span>
          <transition name="component-fade" :mode="mode">
            <component v-bind:is="view"></component>
          </transition>
        </div>
        <h4>6. Transition Modes</h4>
        <div>Two modes: 'in-out' and 'out-in'. Please refer to the example in Transitioning Between Elements</div>
        <h4 class="green">List Transitions</h4>
        <div>
          We’ll use the 'transition-group> component to render a list transition.<br/>
          Vue is using a simple animation technique called FLIP to smoothly transition elements from their old position to their new position using transforms.
        </div>
        <h4>1. List Entering/Leaving Transitions</h4>
        <div id="list-complete-demo" class="example">
          <button v-on:click="add">Add</button>
          <button v-on:click="remove">Remove</button>
          <transition-group name="list-complete" tag="ul">
            <li
              v-for="item in items"
              v-bind:key="item"
              class="list-complete-item"
            >
              {{ item }}
            </li>
          </transition-group>
        </div>
        <h4>2. List Move Transitions</h4>
        <div>
          The v-move class is added when component items are changing positions.<br/>
          Like the other classes, its prefix will match the value of a provided name attribute and you can also manually specify a class with the move-class attribute.
        </div>
      </div>
      <div>
        <h3>State Transition</h3>
        <div>We can animate the state changes using 3rd-party libraries to tween state, in combination with Vue’s reactivity and component systems.</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'transitions',
    data () {
      return {
        show: false,
        show2: false,
        view: 'v-a',
        mode: 'out-in',
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      }
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    },
    methods: {
      changeView: function () {
        if (this.view === 'v-a') {
          this.view = 'v-b'
        } else {
          this.view = 'v-a'
        }
      },
      changeMode: function () {
        if (this.mode === 'in-out') {
          this.mode = 'out-in'
        } else {
          this.mode = 'in-out'
        }
      },
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      }
    }
  }
</script>

<style lang="less">
  .transition {
    .green {
      color: #42b983;
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
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
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
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .list-complete-item {
      transition: all 1s;
      display: inline-block;
      margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translateY(30px);
    }
    .list-complete-leave-active {
      position: absolute;
    }
  }
</style>

