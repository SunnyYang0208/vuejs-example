import Vue from 'vue'
import Router from 'vue-router'
const Introduction = resolve => require(['@/components/Introduction'], resolve)
const Links = resolve => require(['@/components/Links'], resolve)
const Framework = resolve => require(['@/components/Framework'], resolve)
const Syntax = resolve => require(['@/components/Syntax'], resolve)
const Transitions = resolve => require(['@/components/Transitions'], resolve)
const Advanced = resolve => require(['@/components/Advanced'], resolve)
const Comparison = resolve => require(['@/components/Comparison'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // config hash mode
  base: '/',
  routes: [
    {
      path: '/',
      component: Introduction
    },
    {
      path: '/links',
      name: 'links',
      component: Links
    },
    {
      path: '/framework',
      name: 'framework',
      component: Framework
    },
    {
      path: '/syntax',
      name: 'syntax',
      component: Syntax
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: Transitions
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: Advanced
    },
    {
      path: '/comparison',
      name: 'comparison',
      component: Comparison
    }
  ]
})
