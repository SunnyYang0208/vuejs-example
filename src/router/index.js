import Vue from 'vue'
import Router from 'vue-router'
const Introduction = resolve => require(['@/components/Introduction'], resolve)
const Links = resolve => require(['@/components/Links'], resolve)
const Build = resolve => require(['@/components/Build'], resolve)
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
      name: 'introduction',
      component: Introduction
      // children: [
      //   {
      //     path: 'bar',
      //     component: Bar,
      //   }
      // ]
    },
    {
      path: '/links',
      name: 'refferLinks',
      component: Links
    },
    {
      path: '/build',
      name: 'build',
      component: Build
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
