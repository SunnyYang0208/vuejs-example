<template>
  <div>
    <div>
      <h3>React</h3>
      <div>React and Vue share many similarities.</div>
      <ul>
        <li>utilize a virtual DOM</li>
        <li>provide reactive and composable view components</li>
        <li>maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries</li>
      </ul>
      <h4>1. Performance</h4>
      <div>
        Both React and Vue offer comparable performance in most commonly seen use cases, with Vue usually slightly ahead due to its lighter-weight Virtual DOM implementation.
        <ul>
          <li>In React, when a component’s state changes, it triggers the re-render of the entire component sub-tree, starting at that component as root.</li>
          <li>In Vue, a component’s dependencies are automatically tracked during its render, so the system knows precisely which components actually need to re-render when state changes. Each component can be considered to have shouldComponentUpdate automatically implemented for you, without the nested component caveats.</li>
        </ul>
        Overall this removes the need for a whole class of performance optimizations from the developer’s plate, and allows them to focus more on building the app itself as it scales.
      </div>
      <h4>2. HTML & CSS</h4>
      <div>
        In React, everything is just JavaScript. <br/>
        Vue embraces classic web technologies and builds on top of them.
      </div>
      <h4>JSX vs Templates</h4>
      <ul>
        <li>
          JSX advantages
          <ol>
            <li>You can leverage the power of a full programming language (JavaScript) to build your view. This includes temporary variables, flow controls, and directly referencing JavaScript values in scope.</li>
            <li>The tooling support (e.g. linting, type checking, editor autocompletion) for JSX is in some ways more advanced than what’s currently available for Vue templates.</li>
          </ol>
        </li>
        <li>
          Template advantages
          <ol>
            <li>More easier to read and write (with subjective feeling) which makes developers more productive and highly efficiency.</li>
            <li>More easier to progressively migrate existing applications to take advantage of Vue’s reactivity features.</li>
            <li>More easier to attend in the project for designers and less experienced developers.</li>
            <li>You can even use pre-processors such as Pug (formerly known as Jade) to author your Vue templates.</li>
          </ol>
        </li>
      </ul>
      <h4>Component-Scoped CSS</h4>
      <div>
        Vue gives you full access to CSS within single-file components with 'scoped' attribute<br/>
        You also have the option of writing your CSS using any preprocessors (or post-processors) you’d like.
      </div>
      <h4>3. Scale</h4>
      <div>
        For large applications, both Vue and React offer robust routing solutions.<br/>
        Another important difference between these offerings is that Vue’s companion libraries for state management and routing (among other concerns) are all officially supported and kept up-to-date with the core library. <br/>
        Finally, Vue offers a CLI project generator that makes it trivially easy to start a new project using your choice of build system, including webpack, Browserify, or even no build system. 
      </div>
      <h4>4. Native Rendering</h4>
      <div>
        React Native enables you to write native-rendered apps for iOS and Android using the same React component model.<br/>
        This is great in that as a developer, you can apply your knowledge of a framework across multiple platforms. <br/>
        With Weex(a cross-platform UI framework developed by Alibaba Group), you can use the same Vue component syntax to author components that can not only be rendered in the browser, but also natively on iOS and Android!
      </div>
    </div>
    <div>
      <h3>AngularJS</h3>
      <div>
        Some of Vue’s syntax will look very similar to AngularJS (e.g. v-if vs ng-if).<br/>
        This is because there were a lot of things that AngularJS got right and these were an inspiration for Vue very early in its development. 
      </div>
      <h4>1. Complexity</h4>
      <div>Vue is much simpler than AngularJS, both in terms of API and design. Learning enough to build non-trivial applications typically takes less than a day, which is not true for AngularJS.</div>
      <h4>2. Data binding</h4>
      <div>AngularJS uses two-way binding between scopes, while Vue enforces a one-way data flow between components. This makes the flow of data easier to reason about in non-trivial applications. </div>
      <h4>3. Directives vs Components</h4>
      <div>
        Vue has a clearer separation between directives and components. In AngularJS, there’s a lot of confusion between the two.
      </div>
      <h4>4. Directives vs Components</h4>
      <div>
        Vue has better performance and is much, much easier to optimize because it doesn’t use dirty checking. AngularJS becomes slow when there are a lot of watchers, because every time anything in the scope changes, all these watchers need to be re-evaluated again.
      </div>
    </div>
  </div>
</template>

<script>
document.title = 'Comparision'
export default {
  name: 'comparision'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
