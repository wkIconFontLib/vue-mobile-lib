import Vue from 'vue'
import Router from 'vue-router'
// const App = resolve => require(['@/app'], resolve)
const Index = resolve => require(['@/views/index'], resolve)
// const Example = resolve => require(['@/example/example'], resolve)
// 基础组件
const Button = resolve => require(['@/example/global/button'], resolve)
const Flex = resolve => require(['@/example/global/flex'], resolve)
const Form = resolve => require(['@/example/global/form'], resolve)
const Icon = resolve => require(['@/example/global/icon'], resolve)
const List = resolve => require(['@/example/global/list'], resolve)
// 扩展组件
const Header = resolve => require(['@/example/modules/header'], resolve)
const Search = resolve => require(['@/example/modules/search'], resolve)
const TabBar = resolve => require(['@/example/modules/tabBar'], resolve)
const Slider = resolve => require(['@/example/modules/slider'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'button',
          name: 'button',
          component: Button
        },
        {
          path: 'flex',
          name: 'flex',
          component: Flex
        },
        {
          path: 'form',
          name: 'form',
          component: Form
        },
        {
          path: 'icon',
          name: 'icon',
          component: Icon
        },
        {
          path: 'list',
          name: 'list',
          component: List
        },
        {
          path: 'header',
          name: 'header',
          component: Header
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'tabBar',
          name: 'tabBar',
          component: TabBar
        },
        {
          path: 'slider',
          name: 'slider',
          component: Slider
        }
      ]
    }
  ]
})
