import Vue from 'vue'
import Router from 'vue-router'
const Introduction = resolve => require(['@/components/Introduction'], resolve)
const Links = resolve => require(['@/components/Links'], resolve)
const Framework = resolve => require(['@/components/Framework'], resolve)
const Syntax = resolve => require(['@/components/syntax'], resolve)

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
    }
  ]
})
